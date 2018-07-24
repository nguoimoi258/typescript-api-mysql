import * as MySql from "mysql";
import { AppConfigurations } from "../../AppConfigurations";
import { resolve } from "dns";
import { AsyncResource } from "async_hooks";

export class MySqlHelper{
    /**
     * Define a MySql pool
     */
    private _pool: MySql.Pool;
   
    /**
     * Define a db options
     */
    private _dbOptions = {
        "host": String(AppConfigurations.MYSQL_HOST),
        "user": String(AppConfigurations.MYSQL_USER),
        "password": String(AppConfigurations.MYSQL_PASSWORD),
        "database": String(AppConfigurations.MYSQL_DB),
        "port": 3306,
        "connectionLimit": 50,
        "waitForConnections": true,
        "debug": false,
        "_maxListeners:": 100
    };

    constructor(){
        this._pool = MySql.createPool(this._dbOptions);
    }

    /**
     * Excute Query
     */
    public async execute(sqlQuery: string, params?: any): Promise<any>{
        return new Promise<any> (async (resolve, reject) => {
            this._pool.getConnection(async (err, connection) =>{
                if(err){
                    reject(err);
                }
                else{
                    if(params!=null){
                        await connection.query(sqlQuery, params, (err, result) => {
                            if(err){
                                reject(err);
                            }
                            else{
                                resolve(result);
                            }
                            connection.destroy();
                        });
                    }
                    else{
                        await connection.query(sqlQuery, (err, result) => {
                            if(err){
                                reject(err);
                            }
                            else{
                                resolve(result);
                            }
                            connection.destroy();
                        });
                    }
                }
            });
        });
    }

}
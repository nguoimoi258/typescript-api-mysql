import { Device } from "../../models/Device";
import { MySqlHelper } from "../helper/MySqlHelper";

export abstract class DeviceDataProvider{

    protected mysqlHelper: MySqlHelper;

    constructor(){
        this.mysqlHelper = new MySqlHelper();
    }

    async abstract getItem(id: string): Promise<Device>;

    async abstract getAllItem(): Promise<Device[]>;

    async abstract saveItem(device: Device): Promise<any>;

    async abstract deleteItem(id: string): Promise<any>;

}
import { MySqlDeviceDataProvider } from "./mysql/MySqlDeviceDataProvider";
import { Device } from "../models/Device";

export class DeviceService{

    private _mySqlDeviceDataProvider: MySqlDeviceDataProvider;
    
    constructor(){
        this._mySqlDeviceDataProvider = new MySqlDeviceDataProvider();
    }

    /**
     * Create or Update Item
     * @param device 
     */
    public async saveItem(device: Device): Promise<Device>{
        return await this._mySqlDeviceDataProvider.saveItem(device);
    }
    
    public async getItem(id: string): Promise<Device>{
        return await this._mySqlDeviceDataProvider.getItem(id);
    }

    public async getAllItem(): Promise<Device[]>{
        return await this._mySqlDeviceDataProvider.getAllItem();
    }

    public async deleteItem(id: string): Promise<any>{
        return await this._mySqlDeviceDataProvider.deleteItem(id);
    }
}
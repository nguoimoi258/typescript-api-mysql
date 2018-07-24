import EnMessage from './en/Message';
import ViMessage from './en/Message';
import { AppConfigurations } from '../AppConfigurations';

export class Localization {
    private _defautMessageFile: string;
    /**
     * Define a language
     */
    private _language;

    constructor(language: string = "") {
        if(language){
            this._language = language
        }
        else{
            this._language = AppConfigurations.APP_LANGUAGE_EN
        }

        this._defautMessageFile = AppConfigurations.APP_DEFAUT_MESSAGE_FILE;
    }
    
    /**
     * Translate this message to Enlish or Vietnamese
     * @param file 
     * @param message 
     * @param params 
     */
    t(message: string, params: object = {}): string {
        let file = this._defautMessageFile;
        if(!file || !message || (params && typeof params !== 'object')){
            return "";
        }
        let result = "";
        if(this._language == AppConfigurations.APP_LANGUAGE_VI) {
            result = ViMessage[message];
        } else {
            result = EnMessage[message]
        }
        
        if(params) {
            for(let p in params) {
                let replace = "{"+p+"}";
                while(result.indexOf(replace) >= 0){
                    result = result.replace(replace, params[p]);
                }
            }
        }
        return result;
    }
}

export default Localization;
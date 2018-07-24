export class TextUtilities{
    public jsonToString(object: any): string{
        if(typeof(object) != "object"){
            return object;
        }
        else{
            return JSON.stringify(object);
        }
    }
}

export default TextUtilities;
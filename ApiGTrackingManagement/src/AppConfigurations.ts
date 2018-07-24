export enum AppConfigurations{
    
    ///////////////////////////////////////////
    /// App Global Const Define
    APP_PORT = 3000,
    APP_LANGUAGE_EN = "en",
    APP_LANGUAGE_VI = "vi",
    APP_DEFAUT_MESSAGE_FILE = "Message",
    APP_DEFAULT_LOG_FOLDER = "/../../../../../",
    
    ///////////////////////////////////////////
    //// MYSQL CONFIG
    MYSQL_HOST = "f88iot-db.cujzobg2uylq.ap-southeast-1.rds.amazonaws.com",
    MYSQL_USER = "root",
    MYSQL_PORT = 3306,
    MYSQL_PASSWORD = "MZEN6ackxUJzzU9w",
    MYSQL_DB = "gtracking_management",

    //////////////////////////////////////////
    /// LOG Constant define
    LOG_FILE_INFO = 'info.log',
    LOG_FILE_WARNING = 'warning.log',
    LOG_FILE_ERROR = 'error.log',
    LOG_FILE_DEBUG = 'debug.log',

    ////////////////////////////////////////////
    //// Url define
    PATH_BASE = '/api',
    PATH_VERSIONING = '/v1.0',
    PATH_DEVICE = '/device'

}

export default AppConfigurations;
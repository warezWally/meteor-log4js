/**
 * 제작 : 장성용, jsy@adain.kr
 * 날짜 : 15. 3. 19.
 * 내용 :
 */
log4js = Npm.require('log4js');

var logPath = process.env.LOG_PATH || 'service.log';
var logSize = 1024 * 1024 * 15;
var logCount = 20;

if(process.env.LOG_SIZE !== undefined){
  logSize = 1024 * 1024 * parseInt(process.env.LOG_SIZE);
}

if(process.env.LOG_COUNT !== undefined){
  logCount = parseInt(process.env.LOG_COUNT);
}

log4js.configure({
  appenders: [
    {
      type: 'file',
      filename: logPath,
      maxLogSize: logSize,
      backups: logCount,
      category: 'LogSystem'
    }
  ]
});

var log = log4js.getLogger("LogSystem");

log.info("//==================================================");
log.info("// log4js service initialize");
log.info("//==================================================");
log.info("log path: " + logPath);
log.info("log size: " + logSize);
log.info("log count: " + logCount);

LogSystem = {
  /**
   * insert log
   * @param logType
   * @param message
   */
  insertLog: function(logType, message){
    log.info('[' + logType + '] ' + message);
  },

  /**
   * object log
   * @param object
   */
  log: function(object){
    log.info(object);
  },

  /**
   * insert line
   */
  insertLine: function(){
    log.info('---------------------------------------------');
  },

  /**
   * insert error
   * @param logType
   * @param message
   */
  insertError: function(logType, message){
    log.error('[' + logType + '] ' + message);
  },

  /**
   * insert object error
   * @param object
   */
  error: function(object){
    log.error(object);
  },

  /**
   * debug log
   * @param message
   */
  debug: function(message){
    if(process.env.NODE_ENV === "development"){
      console.log(message);
    }else{
      log.debug(message);
    }
  }
};
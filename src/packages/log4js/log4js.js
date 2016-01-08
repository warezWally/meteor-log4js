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
  log: function(obj){
    log.info(obj);
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
  error: function(obj){
    log.error(obj);
  },

  /**
   * debug log
   * @param object
   */
  debug: function(obj){
    log.debug(obj);
  },

  /**
   * trace
   * @param object
   */
  trace: function(obj){
    log.trace(obj);
  },

  /**
   * warn
   * @param object
   */
  warn: function(obj){
    log.warn(obj);
  },

  /**
   * fatal
   * @param obj
   */
  fatal: function(obj){
    log.fatal(obj);
  },

  /**
   * get current logger
   * @returns {*|Logger|{topic, should take a category and return a logger, log events}}
   */
  getLogger: function(){
    return log;
  }
};

LogSystem.trace("////////////////////////////////////////////////");
LogSystem.trace("// log4js service initialized");
LogSystem.trace("////////////////////////////////////////////////");
LogSystem.trace("log path: " + logPath);
LogSystem.trace("log size: " + logSize);
LogSystem.trace("log count: " + logCount);
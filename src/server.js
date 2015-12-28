/**
 * 제작 : 장성용, jsy@adain.kr
 * 날짜 : 12/28/15
 * 내용 :
 */

LogSystem.insertLog("LOG TYPE", "Log test");
LogSystem.log("Log test");
LogSystem.insertLine();
LogSystem.insertError("ERROR TYPE", "Error log");
LogSystem.error("Error log");
LogSystem.debug("Debug message. (process.env.NODE_ENV === \"development\")");
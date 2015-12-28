# meteor-log4js
https://github.com/nomiddlename/log4js-node wrap for meteor

## Install
```sh
$ meteor install adain:log4js
```

## Environment variables
- LOG_PATH : log file path (default path : service.log)
- LOG_SIZE : rolling file size MB (default : 15MB)
- LOG_COUNT: max log file count (default : 20)

## Usage
```javascript
LogSystem.insertLog("LOG TYPE", "Log test");
LogSystem.log("Log test");
LogSystem.insertLine();
LogSystem.insertError("ERROR TYPE", "Error log");
LogSystem.error("Error log");
LogSystem.debug("Debug message. (process.env.NODE_ENV === \"development\")");
```
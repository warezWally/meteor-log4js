/**
 * Log4js wrapper
 */

Package.describe({
  name: 'adain:log4js',
  summary: "log4js",
  version: '0.6.29',
  git: 'https://github.com/ADAIN/meteor-log4js',
  documentation: 'README.md'
});

Npm.depends({'log4js' : '0.6.29'});

Package.on_use(function (api) {
  api.addFiles("log4js.js", "server");
  api.export('log4js', 'server');
  api.export('LogSystem', 'server');
});
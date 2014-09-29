//app/config

/**
 * The only place where process is used.
 * Stores any env configuration that is required.
 * The app will get all properties from this object
 */
var messenger = require('messenger');

var config = module.exports;
//TODO: Give your module a name
config.appName = 'Module Name';

config.express = {
		"port": process.env.PORT || 11001
};

config.mongo = {
		port: process.env.MONGOPORT || 27017,
		host: process.env.MONGOHOST || 'localhost',
		dbName: process.env.MONGODB || 'floorPlan'
};

config.mongo.url = function() {
		return 'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.dbName;
}();

config.pid = process.pid;

/**
 * Get the value of the key that is passed in
 */
config.get = function(key) {
		return process[key]
};

process.once('SIGINT', function() {
		messenger.emit(config.appName + '.exit');
});

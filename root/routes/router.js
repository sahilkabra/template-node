/*
 * This is the main router for the application. It will decide which route should
 * go to which sub module
 */

var router = require('express').Router();
//TODO: Name your router properly
var moduleRouter = require('routes/moduleRouter');

router.use('/plan', moduleRouter);
module.exports = router;

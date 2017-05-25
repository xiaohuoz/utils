var $ =  require('./util.js');
$.log("hello")
var url = '/api/list';
var obj ={ time:new Date().getTime(), id: 1 };
$.log($.mapObjectToUrl(obj, url));
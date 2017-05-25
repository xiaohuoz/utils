'use strict';
function log(){
	switch(arguments.length){
		case 0:
			log("at least one argument is needed");
			break;
		case 1:
			console.log(arguments[0]);
			break;
		default:
			log("too mach argument")
	}
}
function mapObjectToUrl(obj, url){
	var result = url;
	for(var i in obj){
        if(typeof obj[i] !== 'undefined' && obj[i] !==null && obj[i] !== ''){
            result += i + '=' + obj[i] + '&';
        }
    }
    result = result.replace(/&$/,'');
    return result;
}
exports = module.exports;
exports.log = log;
exports.mapObjectToUrl = mapObjectToUrl;
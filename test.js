var a = 1,b = 2,c = 3;
a=b=c;
console.log(a,b,c);
var _ = function(obj) {
	if (obj instanceof _) return obj;
	if (!(this instanceof _)) return new _(obj);
	this._wrapped = obj;
};
console.log(_);
_.VERSION = "1.0.0";
console.log(_);
var o = new Object();
console.log(o);
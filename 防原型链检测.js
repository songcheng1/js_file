//如hook了split方法
String.prototype.split_bk=String.prototype.split;
String.prototype.split = function(val){
str = this.toString()
debugger;
return str.spilt_bk(val)
}
//伪装原型链
String.prototype.split.toString=function(){
return 'function split() { [native code] }'
}

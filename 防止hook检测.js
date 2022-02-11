// 这段代码防止反hook的检测
orig = window.eval;
window.eval=function(str){debugger;orig(str);}
window.eval.toString = function (){return orig.toString();}

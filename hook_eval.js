(function() { 
'use strict';
//过debuger 
var eval_ = window.eval;
window.eval = function(x){
    eval_(x.replace("debugger;","  ; "));
};
//防debuger检测
window.eval.toString = eval_.toString;
})();

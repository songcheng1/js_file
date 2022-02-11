//方式1
Function.prototype.constructor=function(){};
Function.prototype.constructor_bc=Function.prototype.constructor;
Function.prototype.constructor=function(){
    if (arguments==="debugger"){return}
    else{return Function.prototype.constructor_bc.apply(this,arguments)}
};
//方式2
n_eval = eval
eval = function () {
    if (argument.indexOf("debugger") === 0) {
        return
    }
    return n_eval.apply(argument)
}
//方式3
n_eval = eval
eval = function () {
    reg = RegExp(/debugger/)
    if (reg.exec(argument)) {
        return
    }
    return n_eval.apply(argument)
}
//方式4
n_Function = Function
Function = function () {
    if (argument.indexOf("debugger") === 0) {
        return
    }
    return n_Function.apply(argument)
}
//方式5
n_Function = Function
Function = function () {
    reg = RegExp(/debugger/)
    if (reg.exec(argument)) {
        return
    }
    return n_Function.apply(argument)
}

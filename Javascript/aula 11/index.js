/*
&& -> false && true -> false "0 valor mesmo"
||  ->

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
/*
function falaOi (){
    return 'Oi';
}
let vaiExecutar = undefined;

console.log(vaiExecutar && falaOi());
*/
const a = '';
const b = null;
const c = false; // 'false' -> string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
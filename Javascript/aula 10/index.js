/*
Operadores lógicos
&& -> AND -> E -> TODAS EXPRESSÕES PRECISAM SER VERDADEIRAS
|| -> OR -> OU (ALT + 124) -> APENAS UMA PRECISA SER SATISFEITA
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false || false;
const expressaoNot = !true;
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);
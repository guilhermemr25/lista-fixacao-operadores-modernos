const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Os resultador são diferentes pois || considera 0 um valor falsoe usa 10 como alternativa
// enquanto ?? somente retorna 10 se o valor da quantidade for null.
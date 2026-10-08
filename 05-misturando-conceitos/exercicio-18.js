const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

// Os resultador são diferentes pois || considera 0 um valor falso e usa 10 como alternativa
// enquanto ?? somente retorna 10 se o valor da nota do aluno for null.
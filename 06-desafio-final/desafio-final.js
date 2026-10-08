const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante"); // A saída será "Visitante"
console.log(usuario.nome ?? "Visitante"); // A saída será vazia
console.log(usuario.idade || 18); // A saída será "18"
console.log(usuario.idade ?? 18); // A saída será "0"
console.log(usuario.endereco?.cidade); // A saída será "undefined"
console.log(usuario.endereco?.cidade ?? "Sem cidade"); // A saída será "Sem cidade"
const pedido = {
  cliente: {
    nome: "Pedro"
  }
};

const telefone = pedido.cliente.nome?.telefone ?? "Telefone não informado";
console.log(telefone);
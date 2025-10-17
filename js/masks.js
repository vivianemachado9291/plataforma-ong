// Aplica máscara conforme o usuário digita (evento delegado no documento)
document.addEventListener("input", function (e) {
  // CPF -> 000.000.000-00
  if (e.target.id === "cpf") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  // Telefone -> (00) 00000-0000
  if (e.target.id === "telefone") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  }

  // CEP -> 00000-000
  if (e.target.id === "cep") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{3})$/, "$1-$2");
  }
});

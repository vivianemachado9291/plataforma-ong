// Máscaras: CPF, Telefone e CEP
document.addEventListener("input", (e) => {
  const el = e.target;

  if (el.id === "cpf") {
    el.value = el.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  }

  if (el.id === "telefone") {
    el.value = el.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
      .slice(0, 15);
  }

  if (el.id === "cep") {
    el.value = el.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{1,3})$/, "$1-$2")
      .slice(0, 9);
  }
});

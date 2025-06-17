document.getElementById("formDoacao").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    tipo: form.tipo.value,
    doador: form.doador.value,
    data: form.data.value
  };
  console.log("Doação cadastrada:", data);
  alert("Doação registrada com sucesso!");
  form.reset();
});

document.getElementById("formVoluntario").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nome: form.nome.value,
    contato: form.contato.value,
    area: form.area.value
  };
  console.log("Voluntário cadastrado:", data);
  alert("Voluntário registrado com sucesso!");
  form.reset();
});

document.getElementById("formPalestra").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    data: form.data.value,
    local: form.local.value,
    tema: form.tema.value
  };
  console.log("Palestra agendada:", data);
  alert("Palestra agendada com sucesso!");
  form.reset();
});
document.getElementById("formDoacao").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    tipo: form.tipo.value,
    doador: form.doador.value,
    data: form.data.value
  };
  try {
    const res = await fetch("http://localhost:3000/api/doacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      alert("Doação registrada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao cadastrar doação.");
    }
  } catch (err) {
    alert("Falha na conexão com o servidor.");
  }
});

document.getElementById("formVoluntario").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nome: form.nome.value,
    contato: form.contato.value,
    area: form.area.value
  };
  try {
    const res = await fetch("http://localhost:3000/api/voluntarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      alert("Voluntário registrado com sucesso!");
      form.reset();
    } else {
      alert("Erro ao cadastrar voluntário.");
    }
  } catch (err) {
    alert("Falha na conexão com o servidor.");
  }
});

document.getElementById("formPalestra").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    data: form.data.value,
    local: form.local.value,
    tema: form.tema.value
  };
  try {
    const res = await fetch("http://localhost:3000/api/palestras", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      alert("Palestra agendada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao agendar palestra.");
    }
  } catch (err) {
    alert("Falha na conexão com o servidor.");
  }
});
// DOAÇÃO
document.getElementById('formDoacao').addEventListener('submit', async function(e) {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(this).entries());

  const resposta = await fetch('/api/doacoes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  const resultado = await resposta.json();
  alert('Doação registrada com sucesso!');
  this.reset();
});


// VOLUNTÁRIO
document.getElementById('formVoluntario').addEventListener('submit', async function(e) {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(this).entries());
  const res = await fetch('/api/voluntarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  const r = await res.json();
  alert('Voluntário cadastrado com sucesso!');
  this.reset();
});

// PALESTRA
document.getElementById('formPalestra').addEventListener('submit', async function(e) {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(this).entries());
  const res = await fetch('/api/palestras', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  const r = await res.json();
  alert('Palestra agendada com sucesso!');
  this.reset();
});

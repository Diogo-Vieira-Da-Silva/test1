const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  try {
    const response = await fetch("/api/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}`);
    }

    const result = await response.json();
    console.log(result, "usuário cadastrado com sucesso");
    alert("Cadastro enviado com sucesso!");
    form.reset();
  } catch (error) {
    console.error("Falha no cadastro:", error);
    alert("Erro ao enviar cadastro. Veja o console para detalhes.");
  }
});
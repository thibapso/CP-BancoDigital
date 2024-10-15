document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário

      // Mostrar a mensagem na identidade visual
      const mensagemDiv = document.querySelector(".mensagem");
      mensagemDiv.style.display = "block"; // Exibir a mensagem
      mensagemDiv.textContent = "Cadastrado com sucesso!"; // Definir o texto da mensagem

      // Aumentar o width da seção ao enviar o formulário
      const formSection = document.querySelector(".cadastrar");
      formSection.classList.add("expandido");
    });
});
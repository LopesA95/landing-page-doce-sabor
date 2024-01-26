$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: false,
      },
      mensagem: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
      email: "Por favor, insira seu email",
    },
    submitHandler: function (form) {},
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});

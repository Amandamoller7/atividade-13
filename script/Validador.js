//Variáveis
const nome = document.getElementById('nome_passageriro').value.trim();
const sobrenome = document.getElementById('sobrenome_passageriro').value.trim();
const email = document.getElementById('email_passageriro').value.trim();
const cpf = document.getElementById('cpf_passageriro').value.trim();
const quilo = document.getElementById('quilo_passageriro').value.trim();
const altura = document.getElementById('altura_passageriro').value.trim();
const telefone = document.getElementById('telefone_passageriro').value.trim();
const telefone2 = document.getElementById('telefone2_passageriro').value.trim();
const datanacimento = document.getElementById('datanacimento').value.trim();
const nacionalidade = document.getElementById('nacionalidade_passageriro').value.trim();
const naturalidade = document.getElementById('naturalidade_passageriro').value.trim();
const genero = document.getElementById('input[name="opcaogenero"]:radio');
const idioma = document.getElementById('input[name="opcaoremedio"]:radio');
const doenca = document.getElementById('input[name="opcaodoenca"]:radio');
const nomedoremdio = document.getElementById('nome_remdio_passageiro').value.trim();
const remdio = document.getElementById('nome_remdio_passageiro').value.trim();
const formacao = document.getElementById('formacao_passagerio').value.trim();
const civil = document.getElementById('input[name="civil"]:radio');
const planeta = document.getElementById('input[name="planeta"]:radio');
const dataviagem = document.getElementById('dataviagem').value.trim();
const arquivo = document.getElementById('myfile').files[0];
const arquivo2 = document.getElementById('myfile2').files[0];
const arquivo3 = document.getElementById('myfile3').files[0];
const pagamento = document.getElementById('input[name="opcaopagamento"]:radio');
const dependente = document.getElementById('input[nome="opcaodependente"]:radio');
const pressao = document.getElementById('input[nome="opcaopressao"]:radio');
const selecao = document.getElementById('input[nome="opcaoalimentar"]:radio');
const comida = document.getElementById('comida_passageiro').value.trim();
const informacao = document.getElementById('inf1_passageiro').value.trim();
const informacao2 = document.getElementById('inf2_passageiro').value.trim();


//validações
 if (!nome) {
        alert('Por favor, preencha o primeiro nome.');
        return;
    } else {
        console.log(nome);
    }

    if (!sobrenome) {
        alert('Por favor, preencha o sobrenome.');
        return;
    } else {
        console.log(sobrenome);
    }
    
    if (!email) {
        alert('Por favor, preencha o e-mail.');
        return;
    } else {
        console.log(email);
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 dígitos.');
        return;
    } else {
        console.log(cpf);
    }


    if (!datanacimento) {
        alert('Por favor, preencha a data de nascimento.');
        return;
    } else {
        console.log(datanacimento);
    }

    if (!genero) {
        alert('Por favor, selecione o gênero.');
        return;
    } else {
        console.log('Qual é o seu gênero?', genero.value);
    }

    if (!telefone) {
        alert('Por favor, preencha o telefone.');
        return;
    } else {
        console.log(telefone);
    }

      if (!telefone2) {
        alert('Por favor, preencha o seu segundo telefone.');
        return;
    } else {
        console.log(telefone2);
    }


    if (!nacionalidade) {
        alert('Por favor, informe a nacionalidade.');
        return;
    } else {
        console.log(nacionalidade);
    }

    if (!naturalidade) {
        alert('Por favor, informe a sua naturalidade.');
        return;
    } else {
        console.log(naturalidade);
    }

      if (!idioma) {
        alert('Por favor, selecione o idioma.');
        return;
    } else {
        console.log('Quais idiomas você fala?', idioma.value);
    }

      if (!doenca) {
        alert('Por favor, selecione+um campo.');
        return;
    } else {
        console.log('Tem alguma doença?', doenca.value);
    }

     if (!remdio) {
        alert('Por favor, preencha o campo.');
        return;
    } else {
        console.log(remdio);
    }


      if (!nomedoremdio) {
        alert('Por favor, escreva o nome do remdio, caso não use, favor escrever que não.');
        return;
    } else {
        console.log(nomedoremdio);
    }

     if (!formacao) {
        alert('Por favor, escreva qual é a sua formação');
        return;
    } else {
        console.log(formacao);
    }


    if (!civil) {
        alert('Por favor, escolha um campo.');
        return;
    } else {
        console.log('Qual é o seu espaço civil?', civil.value);
    }

    if (isNaN(altura) || altura <= 0) {
        alert('Altura inválida.');
        return;
    } else {
        console.log(altura);
    }

    if (isNaN(quilo) || quilo <= 0) {
        alert('Peso inválido.');
        return;
    } else {
        console.log(quilo);
    }

    
         if (!planeta) {
        alert('Por favor, selecione um planeta.');
        return;
    } else {
        console.log('Para qual planeta voce deseja viajar?', planeta.value);
    }

    
         if (!dataviagem) {
        alert('Por favor, selecione uma data.');
        return;
    } else {
        console.log(dataviagem);
    }

       if (!arquivo) {
        alert('Por favor, envie a imagem.');
        return;
    } else {
        console.log(arquivo);
    }

     if (!arquivo2) {
        alert('Por favor, envie a imagem.');
        return;
    } else {
        console.log(arquivo2);
    }

         if (!arquivo3) {
        alert('Por favor, envie a imagem.');
        return;
    } else {
        console.log(arquivo3);
    }

      if (!arquivo1) {
        alert('Por favor, envie a imagem.');
        return;
    } else {
        console.log(arquivo);
    }
    


    if (!pagamento) {
        alert('Por favor, selecione a forma de pagamento.');
        return;
    } else {
        console.log('Qual é a forma de pagamento?', pagamento.value);
    }

    if (!dependente) {
        alert('Por favor,selecione um campo.');
        return;
    } else {
        console.log('Você é dependente químico?', dependente.value);
    }

    
    if (!pressao) {
        alert('Por favor, selecione um campo.');
        return;
    } else {
        console.log('Sabe lidar sobre pressão? (não que algo vá acontecer)', pressao.value);
    }

    
    if (!selecao) {
        alert('Por favor, informe se possui certificado de mergulho.');
        return;
    } else {
        console.log('Tem alguma seleção alimentar?', selecao.value);
    }


    if (!informacao) {
        alert('Por favor, selecione um pacote.');
        return;
    } else {
        console.log(informacao);
    }

    if (!informacao2) {
        alert('Por favor preencha o campo.');
        return;
    } else {
        console.log(informacao2);
    }

   
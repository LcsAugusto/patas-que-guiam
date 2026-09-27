// Função que registra os listeners de submit e input na #app (delegação).
// Só roda uma vez, quando o DOM já está pronto e a #app já existe.
export function configurarEventos() {
    document.getElementById('app').addEventListener('submit', function (evento) {
        if (evento.target.id === 'form-cadastro') {
            evento.preventDefault();

            const formulario = evento.target;
            const campos = formulario.querySelectorAll('input, select');
            let formularioValido = true;

            campos.forEach(function (campo) {
                const mensagemAnterior = campo.parentElement.querySelector('.mensagem-erro');
                if (mensagemAnterior) {
                    mensagemAnterior.remove();
                }
                // Limpa os atributos de acessibilidade da validação anterior,
                // antes de checar o campo de novo
                campo.removeAttribute('aria-invalid');
                campo.removeAttribute('aria-describedby');

                if (!campo.checkValidity()) {
                    formularioValido = false;
                    campo.classList.add('campo-invalido');

                    // Cria um id único pra mensagem de erro, usado pra ligar
                    // ela ao campo através do aria-describedby
                    const idMensagem = 'erro-' + campo.id;
                    const mensagem = document.createElement('span');
                    mensagem.className = 'mensagem-erro';
                    mensagem.id = idMensagem;
                    // role="alert" faz o leitor de tela anunciar essa mensagem
                    // automaticamente assim que ela é inserida na página
                    mensagem.setAttribute('role', 'alert');
                    mensagem.textContent = mensagemDeErro(campo);
                    campo.insertAdjacentElement('afterend', mensagem);

                    // aria-invalid avisa tecnologia assistiva que o campo está com erro,
                    // aria-describedby liga o campo à mensagem de erro que o explica
                    campo.setAttribute('aria-invalid', 'true');
                    campo.setAttribute('aria-describedby', idMensagem);
                } else {
                    campo.classList.remove('campo-invalido');
                }
            });

            if (formularioValido) {
                // Biblioteca externa SweetAlert2: substitui o alerta nativo do navegador
                // por uma janela de sucesso estilizada
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro feito com sucesso!',
                    text: 'Obrigado por se cadastrar na Patas que Guiam.',
                    confirmButtonColor: '#ffcc26'
                });

                // Monta um objeto comum com os valores atuais de cada campo
                const dadosCadastro = {
                    nome: formulario.querySelector('#nome').value,
                    data_nascimento: formulario.querySelector('#data_nascimento').value,
                    email: formulario.querySelector('#email').value,
                    cpf: formulario.querySelector('#cpf').value,
                    telefone: formulario.querySelector('#telefone').value,
                    rua: formulario.querySelector('#rua').value,
                    numero: formulario.querySelector('#numero').value,
                    bairro: formulario.querySelector('#bairro').value,
                    cidade: formulario.querySelector('#cidade').value,
                    estado: formulario.querySelector('#estado').value,
                    cep: formulario.querySelector('#cep').value
                };

                // O localStorage só armazena texto (string), nunca objetos.
                // JSON.stringify converte o objeto JavaScript numa string de texto.
                localStorage.setItem('cadastroPatasQueGuiam', JSON.stringify(dadosCadastro));
            }
        }
    });

    document.getElementById('app').addEventListener('input', function (evento) {
        if (evento.target.id === 'telefone') {
            let numeros = evento.target.value.replace(/\D/g, '');
            numeros = numeros.slice(0, 11);

            if (numeros.length > 2) {
                numeros = `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
            }
            if (numeros.length > 10) {
                numeros = `${numeros.slice(0, 10)}${numeros.slice(10)}`;
            }

            evento.target.value = numeros;
        }
    });
}

// Função auxiliar interna, sem export porque só é usada aqui dentro do arquivo,
// pelo próprio configurarEventos. Devolve a mensagem certa de acordo com o
// tipo de erro de validação encontrado no campo
function mensagemDeErro(campo) {
    if (campo.validity.valueMissing) {
        return 'Este campo é obrigatório.';
    }
    if (campo.validity.patternMismatch) {
        return 'Formato inválido.';
    }
    return 'Valor inválido.';
}

// Verifica se existe um cadastro salvo e, se existir, preenche os campos
export function restaurarCadastro() {
    // getItem sempre devolve uma string (ou null, se a chave não existir)
    const dadosSalvos = localStorage.getItem('cadastroPatasQueGuiam');

    if (dadosSalvos) {
        // JSON.parse faz o caminho inverso do stringify: transforma
        // a string salva de volta num objeto JavaScript navegável
        const dados = JSON.parse(dadosSalvos);

        document.getElementById('nome').value = dados.nome;
        document.getElementById('data_nascimento').value = dados.data_nascimento;
        document.getElementById('email').value = dados.email;
        document.getElementById('cpf').value = dados.cpf;
        document.getElementById('telefone').value = dados.telefone;
        document.getElementById('rua').value = dados.rua;
        document.getElementById('numero').value = dados.numero;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.cidade;
        document.getElementById('estado').value = dados.estado;
        document.getElementById('cep').value = dados.cep;
    }
}
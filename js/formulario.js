// Este arquivo concentra tudo que envolve o formulário de cadastro:
// registro de eventos, validação de campos e persistência dos dados.
// roteador.js importa e chama configurarEventos e restaurarCadastro,
// mas não precisa saber como cada uma delas funciona por dentro

// Registra os listeners de submit e input na #app (delegação de eventos).
// Usa delegação porque a #app é recriada a cada troca de rota, então um
// listener preso direto no <form> seria perdido; preso na #app, sobrevive
export function configurarEventos() {

    // Escuta o evento de submit em qualquer elemento dentro de #app,
    // mas só age se o alvo do evento for o form-cadastro
    document.getElementById('app').addEventListener('submit', function (evento) {
        if (evento.target.id === 'form-cadastro') {
            evento.preventDefault(); // impede o recarregamento padrão da página

            const formulario = evento.target;
            const campos = formulario.querySelectorAll('input, select');
            let formularioValido = true;

            // Passa por cada campo do formulário e valida um por um
            campos.forEach(function (campo) {
                // Remove qualquer mensagem de erro antiga antes de validar de novo
                const mensagemAnterior = campo.parentElement.querySelector('.mensagem-erro');
                if (mensagemAnterior) {
                    mensagemAnterior.remove();
                }

                // checkValidity usa as regras nativas do HTML (required, pattern, type)
                if (!campo.checkValidity()) {
                    formularioValido = false;
                    campo.classList.add('campo-invalido');

                    // Cria e insere dinamicamente um <span> com a mensagem de erro
                    // logo depois do campo inválido
                    const mensagem = document.createElement('span');
                    mensagem.className = 'mensagem-erro';
                    mensagem.textContent = mensagemDeErro(campo);
                    campo.insertAdjacentElement('afterend', mensagem);
                } else {
                    campo.classList.remove('campo-invalido');
                }
            });

            // Só executa o que está aqui dentro se todos os campos passaram na validação
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

                // localStorage só guarda texto, então JSON.stringify converte
                // o objeto numa string antes de salvar
                localStorage.setItem('cadastroPatasQueGuiam', JSON.stringify(dadosCadastro));
            }
        }
    });

    // Escuta o evento de digitação (input) em qualquer elemento dentro de #app,
    // mas só age se o alvo for o campo telefone. Aplica a máscara enquanto digita
    document.getElementById('app').addEventListener('input', function (evento) {
        if (evento.target.id === 'telefone') {
            let numeros = evento.target.value.replace(/\D/g, ''); // remove tudo que não é dígito
            numeros = numeros.slice(0, 11); // limita a 11 dígitos

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

// Verifica se existe um cadastro salvo no navegador e, se existir,
// preenche os campos do formulário automaticamente. Chamada pelo
// roteador.js toda vez que a rota #cadastro é aberta
export function restaurarCadastro() {
    // getItem sempre devolve uma string, ou null se a chave não existir
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
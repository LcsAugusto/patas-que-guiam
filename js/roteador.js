// Importa os templates prontos (strings de HTML) do arquivo templates.js.
// Esse arquivo não sabe como sobre, projetos, cadastro e contato foram montados,
// só recebe o resultado final pronto pra usar
import { sobre, projetos, cadastro, contato } from './templates.js';

// Importa do formulario.js as duas funções que esse arquivo precisa chamar:
// configurarEventos registra os listeners do formulário,
// restaurarCadastro preenche os campos com dados salvos no localStorage
import { configurarEventos, restaurarCadastro } from './formulario.js';

// Função principal do roteamento. Decide qual template mostrar
// de acordo com o hash atual da URL (a parte depois do #)
function roteador() {
    // Lê a parte da URL depois do #. Exemplo: "#cadastro"
    const hashAtual = window.location.hash;

    // Compara o hash com cada rota conhecida, e troca o conteúdo de #app
    // pelo template correspondente (limpa o que tinha antes e injeta o novo)
    if (hashAtual === '#projetos') {
        document.getElementById('app').innerHTML = projetos;
    }
    else if (hashAtual === '#cadastro') {
        document.getElementById('app').innerHTML = cadastro;
        // Toda vez que a rota de cadastro é aberta, verifica se já existe
        // um cadastro salvo no navegador e preenche os campos automaticamente
        restaurarCadastro();
    }
    else if (hashAtual === '#contato') {
        document.getElementById('app').innerHTML = contato;
    }
    else {
        // Nenhuma rota bateu (inclui hash vazio ou #home): mostra "sobre" como padrão
        document.getElementById('app').innerHTML = sobre;
    }
}

// Registra dois escutadores de evento, ambos chamando a mesma função roteador().
// hashchange dispara toda vez que o usuário clica num link com #
window.addEventListener('hashchange', roteador);

// DOMContentLoaded dispara uma vez, quando a página termina de montar,
// garantindo que a rota correta já apareça no primeiro carregamento
window.addEventListener('DOMContentLoaded', roteador);

// Também espera o DOM estar pronto pra registrar os listeners do formulário,
// já que eles dependem do elemento #app existir na página
window.addEventListener('DOMContentLoaded', configurarEventos);
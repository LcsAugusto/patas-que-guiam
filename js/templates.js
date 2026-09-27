// Cada export const abaixo guarda um template pronto (uma string de HTML)
// que representa o conteúdo de uma rota da SPA. O roteador.js importa
// essas strings e injeta dentro de #app conforme o hash da URL

// Template da rota #sobre, mostrado por padrão quando nenhuma rota bate
export const sobre = `<section id="sobre">
 
      <div class="sobre-texto">
        <h2>Sobre a ONG</h2>
        <p>A Patas que Guiam é uma organização sem fins lucrativos dedicada à formação e adoção de cães-guia para pessoas cegas ou com baixa visão. Iniciamos em 2026, treinando cães especialmente selecionados para oferecer mais autonomia, segurança e independência a quem enxerga o mundo de outra forma, sem nenhum custo para o  tutor</p>
      </div>
 
      <div class="sobre-imagem">
        <img src="../imagens/img-sobre.jpg" width="600" alt="Labrador dourado adulto, usando colete azul de cão-guia, caminhando ao lado de uma pessoa com deficiência visual, que segura a alça rígida do arreio, atravessando uma faixa de pedestres em um dia ensolarado.">
      </div>
    </section>`;

// Template da rota #projetos, com as subseções de voluntariado e campanhas de doação embutidas
export const projetos = `<section id="nossos-projetos">
    <h2>Nossos Projetos</h2>
    <nav aria-label="Navegação Projetos">
      <ul>
 
        <li><a href="#voluntariado">Voluntariado</a></li>
        <li><a href="#campanhas-de-doacao">Campanhas de doação</a></li>
 
      </ul>
    </nav>
  </section>
 
    <section id="voluntariado">
      <h3>Seja um Voluntario</h3>
 
      <article>
        <h4>Voluntariado Presencial</h4>
        <p>Ajude diretamente no treinamento dos cães-guia em nosso centro de adestramento, participando de socialização, exercícios básicos e acompanhamento veterinário. Ideal para quem tem disponibilidade de alguns dias por semana e mora próximo à unidade.</p>
      </article>
 
      <article>
        <h4>Voluntariado á distância</h4>
        <p>Contribua com sua expertise em áreas como comunicação, design, finanças ou tecnologia, apoiando a ONG remotamente na divulgação de campanhas e na organização de processos internos, de qualquer lugar do Brasil.</p>
      </article>
 
      <article>
        <h4>Apadrinhamento</h4>
        <p>Torne-se padrinho ou madrinha de um cão em treinamento, contribuindo mensalmente com os custos de alimentação, saúde e formação até que ele esteja pronto para transformar a vida de outras pessoas, que ganham mais autonomia e segurança no dia a dia com a ajuda do seu novo companheiro.</p>
      </article>
 
    </section>

    <section id="campanhas-de-doacao">
      <h3>Campanhas de Doação</h3>
 
      <article>
        <h4>Campanha de ração</h4>
        <p>Nossos cães em treinamento consomem ração de alta qualidade, essencial para o desenvolvimento físico exigido pelo trabalho de guia. Cada doação ajuda a garantir a alimentação adequada durante todo o período de treinamento.<a href="index.html#contato">entre em contato conosco</a></p>
      </article>
 
      <article>
        <h4>Campanha de vacinação</h4>
        <p>Manter a carteira de vacinação em dia é fundamental para a saúde dos cães-guia e das pessoas que eles acompanham diariamente. Sua doação financia consultas veterinárias e imunizantes ao longo de todo o treinamento.<a href="index.html#contato">entre em contato conosco</a></p>
      </article>
 
 
    </section>`;

// Lista de dados: cada estado brasileiro é um objeto com sigla e nome,
// no lugar das 27 linhas de <option> escritas na mão
export const estados = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" }
];

// Etapa 1: .map() passa por cada objeto do array estados e devolve
// uma lista nova, do mesmo tamanho, mas com cada item já transformado
// na string HTML de uma option
//
// Etapa 2: .join('') pega essa lista de 27 strings e gruda todas elas
// numa string única, sem nenhum caractere entre uma e outra.
// Essa constante não leva export porque só é usada aqui dentro, pra montar o cadastro
const opcoesEstados = estados
    .map((estado) => `<option value="${estado.sigla}">${estado.nome}</option>`)
    .join('');

// Template da rota #cadastro. A string pronta opcoesEstados é inserida
// dentro do select de estado, usando ${...}, no lugar onde antes estariam
// as 27 linhas de option escritas manualmente
export const cadastro = `
            <form id="form-cadastro">

                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome"
                        placeholder="Exemplo: João Carlos da Silva" required>

                    <label for="data_nascimento">Data de Nascimento:</label>
                    <input type="date" id="data_nascimento" name="data_nascimento"
                        placeholder="" required>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email"
                        placeholder="exemplo@exemplo.com" required>


                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00" required>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(00) 00000-0000" required>
                </fieldset>

                <fieldset>
                    <legend>Endereço:</legend>

                    <label for="rua">Rua:</label>
                    <input type="text" id="rua" name="rua"
                        placeholder="" required>

                    <label for="numero">Número:</label>
                    <input type="text" id="numero" name="numero"
                        placeholder="" required>

                    <label for="bairro">Bairro:</label>
                    <input type="text" id="bairro" name="bairro"
                        placeholder="" required>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade"
                        placeholder="" required>

                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado">
                        <option value="">Selecione</option>
                        ${opcoesEstados}
                    </select>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000" required>

                </fieldset>

                <button type="submit">Enviar Cadastro</button>
            </form>`;


// Template da rota #contato, informações estáticas de contato da ONG
export const contato = `<section id="contato">
      <h2>Fale Conosco</h2>
        <ul>
          <li>Telefone: (11) 98765-4321</li>
          <li>E-mail: contato@patasqueguiam.org.br</li>
          <li>Endereço: Rua dos Animais, 123 - São Paulo, SP</li>
        </ul>
    </section>`;
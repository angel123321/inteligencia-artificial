const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a inteligência artificial pode ser aplicada para prever e mitigar os impactos das mudanças climáticas, oferecendo duas abordagens principais para essa questão?",
        alternativas: [
            {
                texto: "Análise de grandes volumes de dados ambientais para identificar padrões e tendências, auxiliando na criação de modelos preditivos mais precisos sobre eventos climáticos extremos e seus efeitos.",
                afirmacao: "Você é uma pessoa reflexiva e cuidadosa buscando entender as consequências."
            },
            {
                texto:  "Otimização do consumo de energia em indústrias e cidades, além do desenvolvimento de sistemas de gestão de recursos hídricos mais eficientes, com base em análises em tempo real de dados de sensores e satélites.",
                afirmacao: "Você é uma pessoa observadora, pois se preocupa com o futuro do meio ambiente."
            }    
           
        ]
    },
    {
       
            enunciado: " A poluição das águas do mar é um problema ambiental global com sérias consequências para a vida marinha e os ecossistemas costeiros. Quais das seguintes alternativas representam as principais fontes de poluição marinha?",
            alternativas: [
                {
                    texto: "O descarte irregular de lixo plástico, como garrafas e sacolas, que fragmentam-se em microplásticos.",
                    afirmacao: "Você demonstra um perfil inovador que sempre busca por mais conhecimento."
                },
                {
                    texto:  " O derramamento de óleo por acidentes com navios petroleiros e plataformas de extração. ",
                    afirmacao: "Você é uma pessoa que gosta muito do mar e que sempre busca alguma maneira de cuidar dele então se proucupa com os acidentes petroleiros."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em seu estilo de vida saúdavel. Voce se encaixa em qual estilo de atividade física?",
        alternativas: [
            {
                texto: " Esportes",
                afirmacao: " Você se interessa mais em esportes coletivos como futsal, Fotebol, Voleibol, etc.",
            },
            {
                texto: " Força e Resistência ",
                afirmacao: " Voce se interessa mais em esportes individuais, focado no desenvolvimento muscular e fortalecimento, como musculação e academia. ",
            }
        ]
    },
    {
        enunciado: " Você se vê como uma pessoa disciplinada neste ramo de vida saúdavel?",
        alternativas: [
            {
                texto: " Sim! ",
                afirmacao: " Além de Interessar-se no ramo, você é uma pessoa muito focada e tem bom hábito de cuidar da saúde. ",
            },
            {
                texto: " Não! ",
                afirmacao: " Porém, apesar de se interessar, você não tem um grande foco na vida saúdavel, utiliza o esporte como uma maneira para se divertir, de passar seu tempo ",
            }
        ]
    },
    {
        enunciado: " Quais os alimentos que você inclui em sua rotina diária ?",
        alternativas: [
            {
                texto: " Alimentos ricos em proteinas, fibras, vitaminas, etc. ",
                afirmacao: " Se alimentar de uma forma beneficiente a sua saúde é incrivel! Consumindo bastante carnes, frutas e tentando seguir uma rotina de dieta buscando sempre o melhor para sua saúde. ",
            },
            {
                texto: " alimentos com alto teor de gorduras e calóricos. ",
                afirmacao: " Optar por alimentos prontos e rápidos, não é uma boa opção. Se submeter a comidas congeladas e ultra-processadas, não se importando muito com seu hábito alimentar. ",
            }
        ]
    },
    {
        enunciado: " Você acha que têm desafios em sua tentativa de vida saúdavel?",
        alternativas: [
            {
                texto: " Não tenho desafios que me prejudique! ",
                afirmacao: " Muito bem! Você não tem desafios, têm tudo ao seu alcance, basta se manter no caminho certo e seguir  ",
            },
            {
                texto: " Sim, alguns desafios. ",
                afirmacao: " Desafios nesta áreas éoque mais temos. É necessária que se mantenha calmo(a), vergonha, sedentarismo e diversos outros desafios são comuns nos dias de hoje. Basta escolher se está a fim de mudar isso! ",
            }
        ]
    },
    {
        enunciado: " Você tem uma motivação que ajuda em sua rotina saudavel?",
        alternativas: [
            {
                texto: " Tenho um objetivo em mente! ",
                afirmacao: "Este objetivo fara você ser um legítimo campeão, dando tudo de sí para estar enfrentando diversos obstáculos.",
            },
            {
                texto: " Aina não tenho nenhum objetivo em mente! ",
                afirmacao: " Enfim, se você ainda não tem nenhum objetivo em mente, fique calmo. Com o tempo você irá perceber qual a sua motivação para uma rotina ideal ",
            }
        ]
    },
];


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
    mostraAlternativas ();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em relação a sua vida ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
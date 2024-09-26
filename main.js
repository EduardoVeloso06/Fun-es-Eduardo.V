const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunstas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em seu estilo de vida saúdavel. Voce se encaixa em qual etilo de atividade física?",
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
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];



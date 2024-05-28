const citacoes = [
    "“May the Force be with you.” - Star Wars",
    "“You can't handle the truth!” - A Few Good Men",
    "“Here's looking at you, kid.” - Casablanca",
    "“To infinity and beyond!” - Toy Story",
    "“I'll be back.” - The Terminator",
    "“Do not go gentle into that good night.” - Dylan Thomas",
    "“Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.” - Robert Frost",
    "“Hope is the thing with feathers that perches in the soul - and sings the tunes without the words - and never stops at all.” - Emily Dickinson",
    "“The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.” - Albert Camus",
    "“It is our choices, Harry, that show what we truly are, far more than our abilities.” - J.K. Rowling, Harry Potter and the Chamber of Secrets",
    "“All happy families are alike; each unhappy family is unhappy in its own way.” - Leo Tolstoy, Anna Karenina",
    "“The only thing necessary for the triumph of evil is for good men to do nothing.” - Edmund Burke",
    "“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela",
    "“A hero need not speak. When he is gone, the world will speak for him.” - Halo",
    "“War. War never changes.” - Fallout",
    "“The right man in the wrong place can make all the difference in the world.” - Half-Life 2",
    "“Wake me when you need me.” - Halo",
];

document.getElementById("poem").innerText = citacoes[Math.floor(Math.random() * citacoes.length)];

const coresFundo = [
    "#FF6347", // Tomate
    "#4682B4", // Azul Aço
    "#2E8B57", // Verde Mar
    "#800080", // Púrpura
    "#FFD700", // Dourado
    "#1E90FF", // Azul real
    "#8A2BE2", // Azul Violeta
    "#32CD32", // Verde Lima
    "#FF69B4", // Rosa Choque
    "#FF4500", // Laranja Vermelho
    "#FF8C00", // Laranja Escuro
    "#00FF7F", // Verde Primavera
    "#00CED1", // Azul Turquesa
    "#DC143C", // Vermelho Carmesim
    "#8B008B", // Magenta
    "#00FFFF", // Ciano
    "#FF1493", // Rosa Profundo
    "#7B68EE", // Azul Médio
    "#20B2AA", // Azul Pó
    "#FFA07A"  // Salmão Claro
];

const coresTexto = [
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#FFFFFF", // Branco
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#FFFFFF", // Branco
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#000000", // Preto
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#000000", // Preto
    "#FFFFFF", // Branco
    "#FFFFFF", // Branco
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#FFFFFF", // Branco
    "#FFFFFF", // Branco
    "#000000", // Preto
    "#000000"  // Preto
];

let id = Math.floor(Math.random()*coresTexto.length);
document.getElementById("poem").style.color = coresTexto[id];
document.body.style.backgroundColor = coresFundo[id];
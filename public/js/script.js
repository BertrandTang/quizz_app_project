const quizData = [
    {
        question: "Quelle est la capitale de la France ?",
        reponse: "Paris",
    },
    {
        question: "Quel est le nom de famille de Naruto ?",
        reponse: "Uzumaki",
    },
    {
        question: "Qu\'est-ce qui est jaune et qui attend ?",
        reponse: "Jonathan",
    },
    {
        question: "Quel être, pourvu d\'une seule voix, a d\'abord quatre jambes le matin, puis deux jambes à midi, et trois jambes le soir ?",
        reponse: "Homme",
    },
    {
        question: "La nuit, je viens sans avoir été appelé, le jour, je disparais sans avoir été volé.",
        reponse: "Étoiles",
    },
    {
        question: "Qu'ai-je dans la poche ?",
        reponse: "Anneau",
    },
    {
        question: "Cette chose toute chose dévore: oiseaux, bêtes, arbres, fleurs, elle ronge le fer, mord l'acier, réduit les dures pierres en poudre, met à mort les rois, détruit les villes, et rabbat les hautes montagnes.",
        reponse: "Temps",
    },
    {
        question: "Vivant sans souffle, froid comme la mort, jamais assoiffé, toujours buvant, en cotte de maille, jamais cliquetant.",
        reponse: "Poisson",
    },
    {
        question: "Certains tentent de s’en cacher, d’autres de tricher mais le temps nous fait nous rencontrer.",
        reponse: "Mort",
    },
    {
        question: "Sans voix, il crie, sans ailes, il voltige, sans dents, il mord, sans bouche, il murmure.",
        reponse: "Vent",
    }
];

let score = 0;
let randomPair;
let reponse; // La variable est définie en amont pour la rendre disponible à tout le block code (sans ça, on ne peut pas comparer la valeur de reponse dans le if statement line 92)

const score_display = document.getElementById("score");

// Fonction qui retourne une paire Question/Réponse aléatoire
const randomQuestRep = (array) => {
    const randomIndex = parseInt((Math.random() * array.length));
    const randomQR = array[randomIndex]; // randomQuestionReponse
    return randomQR;
}

// Fonction qui fait le setup de la question (Elle lance une question aléatoire)
const setupRandomPair = () => {
    const randomPair = randomQuestRep(quizData);
    const question = randomPair.question;
    reponse = randomPair.reponse;

    const display_question = document.getElementById("display_question");
    display_question.textContent = question;
}

setupRandomPair()

const submitForm = document.querySelector("form");

/* On écoute le submit de la réponse et on compare la valeur de l'input (input.value) 
à la réponse attendue : variable reponse qu'on a pris soin de remplir pendant le setupRandomPair. 

Pour rappel, la réponse est contenue dans randomQR qui vient elle même de la fonction randomPair. 
Pour être sûr de travailler avec la bonne paire question/réponse on a appelé la fonction dans une variable randomPair, 
ce qui facilite la manipulation. */

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("input");

    if (input.value.toLowerCase().includes(reponse.toLowerCase())) {
        score++; 
        score_display.textContent = `Votre score est de : ${score}`;
        input.value = ""; // On reset la réponse
        display_output.textContent = ""; // On reset le message de mauvaise réponse
        setupRandomPair();
    } else {
        display_output.textContent = "Mauvaise réponse !";
    }
});

const replayButton = document.getElementById("replay");

replayButton.addEventListener("click", () => {
    const display_output = document.getElementById("display_output");
    display_output.textContent = ""; // On reset le message de mauvaise réponse
    input.value = ""; // On reset la réponse
    score = 0; // On reset le score
    score_display.textContent = "";  // On supprime le message de score le score
    setupRandomPair();  // On relance une partie
    
});
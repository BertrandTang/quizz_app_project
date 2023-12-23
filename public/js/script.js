/*

Pseudo code : 
- On veut afficher une question aléatoire (associée à une réponse)

> On met un add event sur le bouton submit
> On crée une variable contenant un tableau d'objet répertoriant les questions et réponses
> On créé une fonction qui va prendre en paramètre ce tableau et va retourner 
un objet aléatoire (représentant une question et sa réponse) à chaque refresh (optionnel si trop compliqué)
> On va innerHTML le #display avec la question
> Une fois que le bouton submit est activé avec la bonne réponse on affiche un message disant bonne réponse ! 
> Si c'est pas la bonne réponse, on affiche un autre message

bonus : on rajoute un "hint" et un bouton refresh pour changer la question
*/

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
let reponse;
const score_display = document.getElementById("score");

// fonction qui retourne une question/réponse aléatoire
const randomQuestion = (array) => {
    const randomIndex = parseInt((Math.random() * array.length) + 1); // retourne un int de 0 à array.length
    const randomQuest = array[randomIndex - 1]; // retourne un objet de array d'indice de 0 à array.length-1 (du coup c'est les index)
    return randomQuest;
}

const setupRandomPair = () => {
    const randomPair = randomQuestion(quizData);
    const question = randomPair.question;
    reponse = randomPair.reponse;

    const display_question = document.getElementById("display_question");
    display_question.textContent = question;

}

setupRandomPair()

const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("input");

    if (input.value.toLowerCase().includes(reponse.toLowerCase())) {
        const display_output = document.getElementById("display_output");
        display_output.textContent = "Bravo !";
        score++;
        score_display.textContent = `Votre score est de : ${score}`;
        input.value = "";
        setupRandomPair();
    } else {
        display_output.textContent = "Mauvaise réponse !";
    }

});

const replayButton = document.getElementById("replay");

replayButton.addEventListener("click", () => {
    const display_output = document.getElementById("display_output");
    display_output.textContent = "";
    input.value = "";
    score = 0;
    score_display.textContent = "";
    setupRandomPair();
    
});
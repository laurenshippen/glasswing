const dialogue = document.getElementById('dialogue');
const choices = document.getElementById('choices');
const imageContainer = document.getElementById('image');

// Define your game scenes
const gameData = {
  start: {
    text: "hello caterpillar",
    options: [
      { text: "Hello", next: "hello" },
      { text: "Who are you?", next: "who" },
    ],
  },
  hello: {
    text: "I’m glad you’ve come. you were one of our strongest candidates.",
    options: [
      { text: "I’m ready to begin", next: "ready" },
      { text: "I’m not doing this alone", next: "alone" },
    ],
  },
  who: {
    text: "I’m who you’ve been looking for.",
    options: [
      { text: "Okay, but who ARE you?", next: "who really" },
      { text: "I knew I would find you", next: "find" },
    ],
  },
  ready: {
    text: "good. but you’ve brought someone with you. who is this?",
    options: [
      { text: "You think: A friend I do not trust.", next: "say" },
      { text: "You think: The very reason I draw air.", next: "say" },
      { text: "You think: Someone who saved me.", next: "say" },
    ],
  },
  alone: {
    text: "I see that. who is this?",
    options: [
      { text: "You think: A friend I do not trust.", next: "say" },
      { text: "You think: The very reason I draw air.", next: "say" },
      { text: "You think: Someone who saved me.", next: "say" },
    ],
  },
  find: {
    text: "I am not the only one you’ve found–who is your friend?",
    options: [
      { text: "You think: A friend I do not trust.", next: "say" },
      { text: "You think: The very reason I draw air.", next: "say" },
      { text: "You think: Someone who saved me.", next: "say" },
    ],
  },
  "who really": {
    text: "you may call me glasswing. but introductions don’t seem to be complete - who is your friend?",
    options: [
      { text: "You think: A friend I do not trust.", next: "say" },
      { text: "You think: The very reason I draw air.", next: "say" },
      { text: "You think: Someone who saved me.", next: "say" },
    ],
  },
  say: {
    text: "YOU THINK THE TRUTH BUT YOU SAY:",
    options: [
      { text: "A friend.", next: "see" },
      { text: "A fellow comrade.", next: "see" },
      { text: "I don’t know.", next: "see" },
    ],
  },
  see: {
    text: "I see. and you want them on this journey with you?",
    options: [
      { text: "You think: They are watching my every move.", next: "say 2" },
      { text: "You think: They do not know how precious they are to me.", next: "say 2" },
      { text: "You think: I won’t survive without them.", next: "say 2" },
    ],
  },
  "say 2": {
    text: "YOU THINK THE TRUTH BUT YOU SAY:",
    options: [
      { text: "They have helped me before.", next: "turn" },
      { text: "Two heads are better than one.", next: "turn" },
      { text: "No. But they refuse to leave.", next: "turn" },
    ],
  },
  turn: {
    text: "there is no turning back. are you sure you want to begin?",
    options: [
      { text: "You think: No, I want to turn back.", next: "say 3" },
      { text: "You think: Yes, I’m ready.", next: "say 3" },
      { text: "You think: I don’t know which is the best path.", next: "say 3" },
    ],
  },
  "say 3": {
    text: "YOU SAY:",
    options: [
      { text: "Yes.", next: "begin" },
      { text: "Yes.", next: "begin" },
    ],
  },
  begin: {
    text: "coming soon",
    options: [],
  },
};

// Display the scene
function displayScene(sceneKey) {
  const scene = gameData[sceneKey];
  dialogue.textContent = scene.text;
  choices.innerHTML = ""; // Clear previous choices
  imageContainer.innerHTML = ""; // Clear any images

  if (scene.image) {
    const img = document.createElement("img");
    img.src = scene.image;
    img.alt = "End scene image";
    img.style.maxWidth = "100%";
    imageContainer.appendChild(img);
  }

  scene.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "choice";
    button.addEventListener("click", () => displayScene(option.next));
    choices.appendChild(button);
  });
}

// Start the game
displayScene("start");

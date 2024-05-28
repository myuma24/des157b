let money = 400;
let currentScenarioIndex = 0;

const scenarios = [
    {
        text: "Your coworkers invite you to lunch for $3 but money is tight. Do you go to lunch, buy yourself a sandwich for $1, or skip lunch?",
        options: [
            { text: "Go to Lunch", cost: 3, next: 1 },
            { text: "Buy Sandwich", cost: 1, next: 1 },
            { text: "Skip Lunch", cost: 0, next: 1 }
        ]
    },
    {
        text: "You see a movie you really want to watch for $10. Do you watch the movie, rent a movie for $3, or read a book you already have?",
        options: [
            { text: "Watch Movie", cost: 10, next: 2 },
            { text: "Rent Movie", cost: 3, next: 2 },
            { text: "Read Book", cost: 0, next: 2 }
        ]
    },
    {
        text: "Next scenario goes here...",
        options: [
            { text: "Option 1", cost: 0, next: 0 },
            { text: "Option 2", cost: 0, next: 0 }
        ]
    }
];

function updateMoney() {
    document.getElementById('money').textContent = money;
}

function displayScenario() {
    const scenario = scenarios[currentScenarioIndex];
    document.getElementById('scenario').textContent = scenario.text;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    scenario.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => makeChoice(option.cost, option.next);
        optionsDiv.appendChild(button);
    });
}

function makeChoice(cost, nextScenarioIndex) {
    money -= cost;
    updateMoney();
    currentScenarioIndex = nextScenarioIndex;
    displayScenario();
}

updateMoney();
displayScenario();

  
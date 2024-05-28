let money = 400;
let currentScenarioIndex = 0;

const scenarios = [
    {
        text: "Monday Day 1:\nThis is you: Young, single, and no children. You’re a full-time college student with a part-time job that pays $15 per hour. This is California's minimum wage. You live in a small studio apartment. You feel lucky you were able to get your own place even though you’re paying $700 for a couple of square meters.\n\nSuddenly your phone rings.\n\nYou have a new notification: Electric Bill\nTotal to be paid by the end of the month: $130\nYou can pay this bill immediately or delay it for two weeks and get a reminder for it later.",
        options: [
            { text: "Pay immediately", cost: 130, next: 1 },
            { text: "Set a reminder", cost: 0, next: 1 }
        ]
    },
    {
        text: "Tuesday Day 2:\nThis is your college classroom and you just finished attending your last lecture. You’re very tired and want to take the bus home but are behind on some assignments. Do you stay behind and finish up your work or head home early?",
        options: [
            { text: "Stay and finish work", cost: 0, next: 2 },
            { text: "Head home early", cost: 0, next: 2 }
        ]
    },
    {
        text: "Wednesday Day 3:\nToday you have fewer classes. Because you were so tired yesterday you forgot to pack lunch. Your classmates invite you to go have lunch with them. \n\nYou know socializing will benefit your health but you’re still behind on assignments. You decline their offer to finish your assignment, you’ll eat something once you arrive home. You tried to get distracted for a while, but you're way too hungry. You have to get back to doing your work. You cannot wait until you can go home to eat something and rest.\n\nYou know socializing will be good for your health but eating out will cost you $20. An alternative would be to buy yourself a sandwich for $8 at the market or wait and eat something at home.",
        options: [
            { text: "Eat out with friends", cost: 23, next: 3 },
            { text: "Buy a sandwich", cost: 8, next: 3 },
            { text: "Wait and eat at home", cost: 0, next: 3 }
        ]
    },
    {
        text: "Thursday Day 4:\nToday was a busier day but you returned home from your classes. \n\nYou remember to prepare lunch but realize you're out of food for the week, so you decide to go to the supermarket to buy groceries. You pick only the necessities until you spot your favorite snack. It only costs $6 but what you’re currently carrying already costs $59. Do you buy the snack or only what you need?",
        options: [
            { text: "Buy the snack", cost: 6, next: 4 },
            { text: "Only buy what you need", cost: 0, next: 4 }
        ]
    },
    {
        text: "Friday Day 5:\nToday is Friday, and while you don’t have classes on Friday, you do have work. You work on Fridays and Saturdays for 8 hours per day and get paid at the end of the month ($960). \n\nAfter finishing your shift you return home. Tomorrow is the weekend.",
        options: [
            { text: "Continue", cost: 0, next: 5 }
        ]
    },
    {
        text: "Saturday Day 6:\nYou wake up and repeat what you did yesterday. You return home to have dinner. \n\nWhile having dinner you get a text from your childhood friend.\n\nHey, I’m thinking of having a get-together for my birthday tomorrow! Should you attend?",
        options: [
            { text: "Attend and bring a gift ($30)", cost: 30, next: 6 },
            { text: "Attend and get a small gift ($10)", cost: 10, next: 6 },
            { text: "Attend without a gift", cost: 0, next: 6 },
            { text: "Decline and say you can’t make it", cost: 0, next: 6 }
        ]
    },
    {
        text: "Sunday Day 7:\nYou decline and say you’re busy. Your friend is disappointed but they understand. You don’t have anything else planned today so you stay home and watch videos on your phone.\n\nYou arrive at the event. After having a tough week, you feel brand new after seeing your friends. It’s getting late and you’re getting tired. Should you leave early and take the transit bus or stay a bit longer and get a ride home?",
        options: [
            { text: "Leave on bus (-$4)", cost: 4, next: 7 },
            { text: "Stay and get a ride home", cost: 0, next: 7 }
        ]
    },
    {
        text: "Monday Day 8:\nThe week starts. Luckily, today wasn't as heavy as last week, but you notice some of your classmates are coughing and sneezing a lot.\n\nYou keep working until the time to leave arrives, and remember you should try to pass by the supermarket.\n\nAt the supermarket you buy the same stuff you always do: food for breakfast, stuff that's easy and fast to cook, so you don't have to spend too much time preparing your lunch every day.\n\nYou buy more than you usually do in an attempt to avoid having to go back to the supermarket for a couple of days.\n\nYou go to the cashier and the bill is $40 in total. It's more than what you expected, but there isn't anything you could really take out. You proceed to pay and go home and rest.",
        options: [
            { text: "Continue", cost: 40, next: 8 }
        ]
    },
    {
        text: "Day 9:\nSecond day of the week. Many of your classmates are still sick.\n\nYou try to be careful not to catch something. You fear that if you get sick you might have to stay in bed.\n\nYou keep working for the rest of the day without socializing that much until it's time to leave.\n\nOn your way home you saw many people sneezing and coughing. You hope you didn't catch anything. It might just be an allergic reaction.\n\nYou don't understand why you feel so tired, so after you get home, you go straight to your bed.",
        options: [
            { text: "Continue", cost: 0, next: 9 }
        ]
    },
    {
        text: "Tuesday Day 10:\nYour alarm rings. You feel like a truck just ran over you. You feel weak, your head hurts. You wonder if you caught the same thing your classmates have, or if it's just from exhaustion.\n\nYou think that maybe it might be a good idea to stay in bed today, but you know that it will affect your next salary. On the other hand, if you go to a doctor you will have to pay $100 for an appointment and maybe buy some medication. What will you do?",
        options: [
            { text: "Go to class anyway", cost: 0, next: 10 },
            { text: "Go see a doctor (-$100)", cost: 100, next: 10 },
            { text: "Rest in bed", cost: 0, next: 10 }
        ]
    },
    {
        text: "Thursday Day 11:\nToday you need to rest in bed once again, but at least you feel a little better than yesterday.\n\nSuddenly you hear a notification from your phone.\n\n“Dear tenants, here's a copy of this month's expenses.”\n\nYou review the document and see that your common expenses this month is $20. It's the same amount you pay each month.\n\nYou decide to pay them immediately and keep resting for the rest of the day.",
        options: [
            { text: "Continue", cost: 20, next: 11 }
        ]
    },
    {
        text: "Friday Day 12:\nToday you go back to work. You're worried about skipping class for 2 days, and you're unsure if there will be a chance to make up for those days.\n\nWhile you're focused on working, you notice that there's a notification on your phone.\n\n\"New Notification Water Bill. Total to be paid: $77\"\n\nYou proceed to make the transfer and put your phone away.",
        options: [
            { text: "Continue", cost: 77, next: 12 }
        ]
    },
    {
        text: "Saturday Day 13:\nToday you get ready for work, but after checking your closet you realize that there are almost no clean clothes for the next week. You don't have a washing machine in your apartment, so you need to go do the laundry after work.\n\nYou buy a token for the washing machine and another for the drying machine, spending $4.00 in total. Once you're home, you finish storing up your clothes and you notice you have a missed call from your mom.\n\nYou decide to call her back.\n\nAfter a few seconds, your mother answers. She asks you about how have you been and if you need anything. After a few minutes, she asks you if you could go to lunch with her tomorrow. Even though you're a little tired, you confirm that you will be there tomorrow.",
        options: [
            { text: "Continue", cost: 4, next: 13 }
        ]
    },
    {
        text: "Sunday Day 14:\nYou arrive at your parent's house. As always, your mom welcomes you with a delicious lunch, made with a lot of effort. You both have a good talk for a while.\n\nAfter you're done eating, you insist on helping clean up, you know she's tired too.\n\nWhile you're getting ready to go back home, your mom takes out her purse and comes close to you. She gives you a $50.00 bill. She says \"It might not be much, but I hope it helps you\". You know that this is a big sacrifice for her, considering her stipend. Do you take the bill or do you tell her that it's not necessary?",
        options: [
            { text: "Take the bill", cost: -50, next: 14 },
            { text: "Tell her it's not necessary", cost: 0, next: 14 }
        ]
    },
    {
        text: "Monday Day 15:\nYou're halfway through the month. You still have $00.00 and in less than two weeks you have to pay rent.\n\nIn 15 more days, you'll be paid $960.00.",
        options: [
            { text: "Continue", cost: 0, next: 0 }
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

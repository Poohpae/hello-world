const careBears = [
    { name: "Tenderheart Bear", color: "Orange", emotion: "Love", specialPower: "Caring" },
    { name: "Cheer Bear", color: "Pink", emotion: "Happiness", specialPower: "Joyful" },
    { name: "Grumpy Bear", color: "Blue", emotion: "Grumpiness", specialPower: "Storm Control" },
    { name: "Funshine Bear", color: "Yellow", emotion: "Fun", specialPower: "Sunlight" },
    { name: "Bedtime Bear", color: "Purple", emotion: "Sleepiness", specialPower: "Dream Magic" }
];


function findCareBearByEmotion(emotion) {
    return careBears.filter(bear => bear.emotion.toLowerCase() === emotion.toLowerCase());
}


function showSpecialPower(name) {
    const bear = careBears.find(bear => bear.name === name);
    if (bear) {
        console.log(`${bear.name} uses their special power: ${bear.specialPower}!`);
    } else {
        console.log("Care Bear not found!");
    }
}


function greetCareBears() {
    careBears.forEach(bear => {
        console.log(`${bear.name} says: "Hi! I'm ${bear.name}, and I spread ${bear.emotion}!"`);
    });
}


greetCareBears();

const happyBears = findCareBearByEmotion("Happiness");
console.log("Care Bears who spread Happiness:", happyBears.map(bear => bear.name).join(", "));

showSpecialPower("Grumpy Bear");
showSpecialPower("Tenderheart Bear");

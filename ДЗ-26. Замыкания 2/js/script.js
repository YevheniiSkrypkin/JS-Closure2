
function getRandomInt (max = 100) {
    return Math.floor(Math.random() * max)
}

function closure() {
    let someArr = [];


    function innerFunc() {
        if (someArr.length === 100) {return {someArr}}
        

        const randomInt = getRandomInt();

        if (someArr.includes(randomInt)) {
            return innerFunc();
        }

        someArr.push(randomInt);

        return {
            num: randomInt,
            someArr,
            
        };
    }
    return innerFunc
    
}

let cl = closure();
for (let i = 1; i <= 100; i++) {
    console.log(cl())
}

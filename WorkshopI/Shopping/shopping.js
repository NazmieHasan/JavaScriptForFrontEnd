let inputArray = [3, 4, 2.7];
let moneyForChoco = inputArray[1]*0.65;
let moneyForMilk = inputArray[2]*2.70;
let orangesCount = Math.floor(inputArray[1] - (inputArray[1] * 0.35));
let moneyForOranges = orangesCount * 0.20;

let totalSpendMoney = moneyForChoco + moneyForMilk + moneyForOranges;

if (totalSpendMoney <= inputArray[0]) {
    console.log(`You got this, ${(inputArray[0] - totalSpendMoney).toFixed(2)} money left.`);
}
else {
    console.log(`Not enough money, you need ${(totalSpendMoney - inputArray[0].toFixed(2))} more.`);
}
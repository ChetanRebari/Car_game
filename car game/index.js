
let carEl = document.querySelector('.car');
// console.log(carEl)


let rotate = 5;
let speed = 8;
const element = document.getElementById('animatedBackground');
element.style.animation = 'moveBackground 8s linear infinite';

function speedDown() {
  
    if (speed > 0) {
        speed++;
        element.style.animationDuration = speed + "s";
        carEl.style.transform = 'rotate(' + rotate + 'deg)';
    }

}
// speedDown()

function speedUp() {
    speed--;
    element.style.animationDuration = speed + "s";
    carEl.style.transform = 'rotate(' + -1 + 'deg)';
    if (speed === 0) {
        speed++;
        speedDown()
    }
}
speedUp()






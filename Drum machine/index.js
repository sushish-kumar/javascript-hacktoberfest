// select all buttons elements in DOM
const buttons = document.querySelectorAll(".drum");


// add click event for each button for user want to make sound via click buttons
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        // to make sound
        // important: here this refer to the current button
        makeSound(this.textContent);
        // after make sound here I will add box shadow to show some animation for click event
        boxShadow(this.textContent);
    })
})

// add keydown event for user want to make sound via press click
document.addEventListener("keydown", function (event) {
    // event object is refer to the individual key who got keydown event
    // Important: (key) mean every individual key who press by user
    makeSound(event.key);
    // after make sound here I will add box shadow to show some animation for keydown event
    boxShadow(event.key);
})


// core function to make sound
function makeSound(sound_id) {
    // sound_id is nothing but (event.key) like: [a,b,c,d,e,g, etc]  who press by user 
    switch (sound_id) {
        // if sound_id is equal to 'w' so make (tom-1.mp3) sound
        case 'w':
            let audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        // if sound_id is equal to 'a' so make (tom-2.mp3) sound
        case 'a':
            let audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        // if sound_id is equal to 's' so make (tom-3.mp3) sound
        case 's':
            let audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        // if sound_id is equal to 'd' so make (tom-4.mp3) sound
        case 'd':
            let audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        // if sound_id is equal to 'j' so make (snare.mp3) sound
        case 'j':
            let audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        // if sound_id is equal to 'k' so make (crash.mp3) sound
        case 'k':
            let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        // if sound_id is equal to 'l' so make (kick-bass.mp3) sound
        case 'l':
            let audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
    }
}


// show boxshadow for sake of animation
function boxShadow(data) {
    // data is every key who press by user and with data variable I will select class see index.html for more info
    let key = document.querySelector(`.${data}`);

    // add css style property in buttons
    key.style.cssText = "transition:all 100ms ease-in; box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);  transform: scale(1.1);"

    // remove property within button after 200 miliseconds
    setTimeout(() => {
        key.style.cssText = "box-shadow:  transform: scale(1)"
    }, 200);

}




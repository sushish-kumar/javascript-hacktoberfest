// first trick to select all buttons

const buttons = document.querySelectorAll(".drum");
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        makeSound(this.textContent);
        boxShadow(this.textContent);
    })
})


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    boxShadow(event.key);
})


function makeSound(sound_id) {
    switch (sound_id) {
        case 'w':
            let audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            // boxShadow('w');
            break;
        case 'a':
            let audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            // boxShadow('a');
            break;
        case 's':
            let audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            // boxShadow('s');
            break;
        case 'd':
            let audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            // boxShadow('d');
            break;
        case 'j':
            let audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            // boxShadow('j');
            break;
        case 'k':
            let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            // boxShadow('k');
            break;
        case 'l':
            let audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            // boxShadow('l');
            break;
    }
}



function boxShadow(data) {

    // My way to solve problem
    // buttons.forEach(function (item) {
    //     if (item.textContent === data) {
    //         item.style.cssText = "transition:all 100ms ease-in; box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);  transform: scale(1.1);"
    //         setTimeout(() => {
    //             item.style.cssText = "box-shadow:  transform: scale(1)"
    //         }, 200);
    //     }
    // })

    // instructor way to solve this problem
    let key = document.querySelector(`.${data}`);
    key.style.cssText = "transition:all 100ms ease-in; box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);  transform: scale(1.1);"
    setTimeout(() => {
        key.style.cssText = "box-shadow:  transform: scale(1)"
    }, 200);

}





// Second trick to select all buttons

// const buttons = document.querySelector(".set");

// buttons.addEventListener("click", function (event) {
//     if (event.target.classList.contains('drum')) {
//         // alert("I got clicked");
//         // console.log(this)
//         if (event.target.classList.contains('w')) {
//             let audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('a')) {
//             let audio = new Audio('sounds/tom-2.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('s')) {
//             let audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('d')) {
//             let audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('j')) {
//             let audio = new Audio('sounds/snare.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('k')) {
//             let audio = new Audio('sounds/crash.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         if (event.target.classList.contains('l')) {
//             let audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             event.target.style.cssText = "box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);"
//             setTimeout(() => {
//                 event.target.style.cssText = "box-shadow: none"
//             }, 300);
//         }
//         // event.target.style.cssText = "box-shadow: none"
//     }
// })




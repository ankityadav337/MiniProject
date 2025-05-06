let user_arr = [];
let key_arr = [];

let arr = ["yellow", "green", "blue", "purple"];

let h3 = document.querySelector("h2");
let body = document.querySelector("body");
let btn=document.querySelector("#button");
let level = 0;
let highScore;


// game start
started = false;

btn.addEventListener("click", function () {
    if (started == false) {
        started = true;
        levelUp();
        body.classList.remove("flash1");
    }
});


// function for level up 
function levelUp() {
    level++;
    user_arr = [];
    h3.innerText = `Level: ${level}`;
    setTimeout(function(){
        randBtn();
    },500);
    
}

// flash function
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")

    }, 300);
};
// random btn generator
function randBtn() {
    let rand = Math.floor(Math.random() * 4);
    let randColor = arr[rand];
    let randbtn = document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
    key_arr.push(randColor);
    console.log(key_arr);
};
// click btn
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", clickBtn);
};
function clickBtn() {
    btnFlash(this);
    user_btn = this.getAttribute("id");
    user_arr.push(user_btn);
    console.log(user_arr);
    check(user_arr.length - 1);

};

// checking

function check(idx) {
    if (key_arr[idx] === user_arr[idx]) {
        if (user_arr.length == key_arr.length) {
            setTimeout(levelUp, 1500);
            
        }
    }
    else {
        body.classList.add("flash1");
        h3.innerText = `Game over! Your score is ${level}, press start button to restart the game `;
        // setTimeout(function () {
        //     body.classList.remove("flash1");
        // }, 10000);
        reset();
    }
};

// reset

function reset() {
   
    level = 0;
    user_arr = [];
    key_arr = [];
    started = false;
};



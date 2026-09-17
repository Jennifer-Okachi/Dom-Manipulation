const title = document.getElementById("title");
const message = document.getElementById("message");

const nameInput = document.getElementById("nameInput");
const ScoreInput = document.getElementById("ScoreInput");

const greetbtn = document.getElementById("greetbtn");
const checkbtn = document.getElementById("checkbtn");

const clearbtn = document.getElementById("clearbtn");

const result = document.getElementById("result");


//greet btn

greetbtn.addEventListener("click", function(){
    const name =  nameInput.value;

    if (name === ""){
        result.textContent= "please enter your name";
        return;
    }
        result.innerHTML = `hello ${name}`;

        result.innerHTML = `
        <h2> Welcome!</h2>
        <p>Hello ${name},welcome to Dom Manipulation.</p>`;
});


//check btn
checkbtn.addEventListener("click", function(){
    const score = (ScoreInput.value);

    if(ScoreInput.value === ""){
        result.textContent = "please enter your score";
        return;
    }

    if (score >= 50){
        result.innerHTML = `
        <h2>Result</h2>
        <p> score: ${score}<p>
        <p>You passed!</p>
        `
    } else {
        result.innerHTML = `
        <h2>Result</h2>
        <p>score: ${score}</P>
        <p>You failed!</P>`;
    };
});


//event
nameInput.addEventListener("input", function(){
    const name = nameInput.value;

    if(name === "") {
        message.textContent ="Type your name below"
    } else {
        message.textContent = `You are typing: ${name}`;
    }
});


//delete btn
clearbtn.addEventListener("click", function(){
    nameInput.value ="";
    ScoreInput.value ="";

    title.textContent="Welcome to jenga";

    message.textContent="Type your name";
    result.innerHTML="";
});

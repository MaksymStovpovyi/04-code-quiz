let cnt = document.getElementById('cnt');
let timeLeft = document.getElementById('time');

let className = 'class ="cnt_title"';
let pageIs = 'start';
let totalTime = 3;
let leftTime = totalTime;

let pageStart = `
    <h2 `+ className + `>Coding Quiz Challenge</h2>
    <p>
    Try to answer the following code-related questions within the time limit <br>
    Keep in mind that incorrect answers will penalize your score/time by top seconds!
    </p>
    <button class="btn">Start Quiz</button>
`;
// 3
let qstn1 = `
    <h2 `+ className + `>Q1 Commonly used data types DO Not Include:</h2>
    <button class="btn" data-answer="a1">1. strings</button><br>
    <button class="btn" data-answer="a2">2. booleans</button><br>
    <button class="btn" data-answer="a3">3. alerts</button><br>
    <button class="btn" data-answer="a4">4. numbers</button>
`;
// 2
let qstn2 = `
    <h2 `+ className + `>Q2 The condition in an if / else statement is enclosed with _______.</h2>
    <button class="btn" data-answer="a1">1. quotes</button><br>
    <button class="btn" data-answer="a2">2. curly brackets</button><br>
    <button class="btn" data-answer="a3">3. parenthesis</button><br>
    <button class="btn" data-answer="a4">4. square brackets</button>
`;
// 4
let qstn3 = `
    <h2 `+ className + `>Q3 Arrays in JavaScript can be used to store _______.</h2>
    <button class="btn" data-answer="a1">1. numbers and strings</button><br>
    <button class="btn" data-answer="a2">2. other arrays</button><br>
    <button class="btn" data-answer="a3">3. booleans</button><br>
    <button class="btn" data-answer="a4">4. all of the above</button>
`;
// 3
let qstn4 = `
    <h2 `+ className + `>Q4 String values must be enclosed within _______ when being assigned to variables.</h2>
    <button class="btn" data-answer="a1">1. commas</button><br>
    <button class="btn" data-answer="a2">2. curly brackets</button><br>
    <button class="btn" data-answer="a3">3. quotes</button><br>
    <button class="btn" data-answer="a4">4. parenthesis</button>
`;
// 4
let qstn5 = `
    <h2 `+ className + `>Q5 Avery useful tool used during development and debugging for printing content to the debugger is:</h2>
    <button class="btn" data-answer="a1">1. JavaScript</button><br>
    <button class="btn" data-answer="a2">2. terminal/bash</button><br>
    <button class="btn" data-answer="a3">3. for loops</button><br>
    <button class="btn" data-answer="a4">4. console.log</button>
`;

let allDone = `
    <h2 `+ className + `>All done!</h2>
    <p>some text</p><br>

    <form name="initials">
    
        <label>Let's submit some text</label>
        <input type="text" name="text" />
        <input type="submit" value="Submit" class="btn"/>

    </form>
`;

let hiScore = `
    <h2 `+ className + `>hi score</h2>
    <button class="btn">Go back</button><br>
    <button class="btn">Clear score</button>
`;

runPage(pageStart); // start function

// mainFunction
function runPage (page) {
    cnt.innerHTML = page;
    console.log(pageIs);
    
    let btn = document.getElementsByClassName('btn');
    
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (e) => {
            e.preventDefault();

            if (pageIs === 'start') {

                timer();//start timer
                
                pageIs = "qstn1";
                runPage(qstn1);

            } else if (pageIs === 'qstn1') {

                drop(btn[i].dataset.answer, 'a3');
                pageIs = "qstn2";
                runPage(qstn2);

            } else if (pageIs === 'qstn2') {

                drop(btn[i].dataset.answer, 'a2');
                pageIs = "qstn3";
                runPage(qstn3);

            } else if (pageIs === 'qstn3') {

                drop(btn[i].dataset.answer, 'a4');
                pageIs = "qstn4";
                runPage(qstn4);

            } else if (pageIs === 'qstn4') {

                drop(btn[i].dataset.answer, 'a3');
                pageIs = "qstn5";
                runPage(qstn5);

            } else if (pageIs === 'qstn5') {

                drop(btn[i].dataset.answer, 'a4');
                pageIs = "allDone";
                runPage(allDone);

            } else if (pageIs === 'allDone') {

                let form = document.forms.initials;
                let elem = form.elements.text;
                console.log(elem.value);

                ///
                localStorage.setItem('key', 'pop');

                pageIs = "hiScore";
                runPage(hiScore);

            } else if (pageIs === 'hiScore') {
                pageIs = "start";
                runPage(pageStart);
            }

        })
    }   
    
}

//timer
function timer() {
    let myTimer = setInterval(() => {
        if (leftTime >= 0) {
            console.log(leftTime);
            timeLeft.innerHTML = leftTime;
            leftTime--;
        } else {
            clearInterval(myTimer);
            timeLeft.innerHTML = '';
            //runPage(allDone);
            leftTime = totalTime;
        }   
    }, 1000);
}

// DROP
function drop(answer, trueAnswer) {
    if (answer != trueAnswer) {
        leftTime -= 5;
    }
}
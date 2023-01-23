let cnt = document.getElementById('cnt');
let elemTime = document.getElementById('time');
 
let pageIs = 'start';
let totalTime = 6000;
let leftTime = totalTime;
let finalScore;

let pageStart = `
    <h2 class ="cnt_title" >Coding Quiz Challenge</h2>
    <p>
    Try to answer the following code-related questions within the time limit <br>
    Keep in mind that incorrect answers will penalize your score/time<br> by top seconds!
    </p>
    <button class="btn btn_start" btn_start>Start Quiz</button>
`;
// 3
let qstn1 = `
    <h2 class ="cnt_title qstn_title" >Commonly used data<br> types DO Not Include:</h2>

    <div class="qstn_wrapper">
        <button class="btn" datqstn_titlea-answer="a1">1. strings</button><br>
        <button class="btn" data-answer="a2">2. booleans</button><br>
        <button class="btn" data-answer="a3">3. alerts</button><br>
        <button class="btn" data-answer="a4">4. numbers</button>
    <div>
    <span class="answer"></span>
`;
// 2
let qstn2 = `
    <h2 class ="cnt_title qstn_title" >The condition in an if / else<br> statement is enclosed with _______.</h2>

    <div class="qstn_wrapper">
        <button class="btn" data-answer="a1">1. quotes</button><br>
        <button class="btn" data-answer="a2">2. curly brackets</button><br>
        <button class="btn" data-answer="a3">3. parenthesis</button><br>
        <button class="btn" data-answer="a4">4. square brackets</button>
    <div>
    <span class="answer"></span>
`;
// 4
let qstn3 = `
    <h2 class ="cnt_title qstn_title" >Arrays in JavaScript can<br> be used to store _______.</h2>

    <div class="qstn_wrapper">
        <button class="btn" data-answer="a1">1. numbers and strings</button><br>
        <button class="btn" data-answer="a2">2. other arrays</button><br>
        <button class="btn" data-answer="a3">3. booleans</button><br>
        <button class="btn" data-answer="a4">4. all of the above</button>
    <div>
    <span class="answer"></span>
`;
// 3
let qstn4 = `
    <h2 class ="cnt_title qstn_title" >String values must be enclosed within<br> _______ when being assigned to variables.</h2>

    <div class="qstn_wrapper">
        <button class="btn" data-answer="a1">1. commas</button><br>
        <button class="btn" data-answer="a2">2. curly brackets</button><br>
        <button class="btn" data-answer="a3">3. quotes</button><br>
        <button class="btn" data-answer="a4">4. parenthesis</button>
    <div>
    <span class="answer"></span>
    `;
// 4
let qstn5 = `
    <h2 class ="cnt_title qstn_title" >Avery useful tool used during development and debugging for printing content to the debugger is:</h2>

    <div class="qstn_wrapper">
        <button class="btn" data-answer="a1">1. JavaScript</button><br>
        <button class="btn" data-answer="a2">2. terminal/bash</button><br>
        <button class="btn" data-answer="a3">3. for loops</button><br>
        <button class="btn" data-answer="a4">4. console.log</button>
    <div></div>
    <span class="answer"></span>
`;

let allDone = `
    <div class="done_wrapper">
        <h2 class ="cnt_title" >All done!</h2>
        <p>Your final score is <span id="yourScore"></span></p><br>

        <form name="initials">
        
            <label>Enter initials: </label>
            <input type="text" name="text" />
            <input type="submit" value="Submit" class="btn"/>

        </form>
    </div>
`;

let hiScore = `
    <div class="list_wrapper">
        <h2 class ="cnt_title" >High scores</h2>
        <ul id="score-list"></ul>
        <button class="btn">Go back</button>
        <button class="btn">Clear score</button>
    </div>
`;

runPage(pageStart); // start function

// mainFunction
function runPage (page) {
    cnt.innerHTML = page;
    console.log(pageIs);

    //Listener for buttons 
    let btn = document.getElementsByClassName('btn');
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (e) => {
            e.preventDefault();

            if (pageIs === 'start') {

                startTimer();
                pageIs = "qstn1";
                runPage(qstn1);

            } else if (pageIs === 'qstn1') {

                drop(btn[i].dataset.answer, 'a3');
                
                setTimeout(() => {
                    pageIs = "qstn2";
                    runPage(qstn2);
                }, 1000);
                
            } else if (pageIs === 'qstn2') {

                drop(btn[i].dataset.answer, 'a2');

                setTimeout(() => {
                    pageIs = "qstn3";
                    runPage(qstn3);
                }, 1000);
                
            } else if (pageIs === 'qstn3') {

                drop(btn[i].dataset.answer, 'a4');

                setTimeout(() => {
                    pageIs = "qstn4";
                    runPage(qstn4);
                }, 1000);

            } else if (pageIs === 'qstn4') {

                drop(btn[i].dataset.answer, 'a3');

                setTimeout(() => {
                    pageIs = "qstn5";
                    runPage(qstn5);
                }, 1000);

            } else if (pageIs === 'qstn5') {

                drop(btn[i].dataset.answer, 'a4');

                setTimeout(() => {
                    pageIs = "allDone";
                    runPage(allDone);
                }, 1000);

            } else if (pageIs === 'allDone') {
                // name from form
                let form = document.forms.initials;
                let elem = form.elements.text;

                // array [name and score]
                let fromForm = [elem.value, finalScore];
                
                if (localStorage.hiScore) {
                    let fromLS = JSON.parse(localStorage.getItem('hiScore'));
                    fromLS.unshift(fromForm);
                    localStorage.setItem('hiScore', JSON.stringify(fromLS));
                } else {
                    localStorage.setItem('hiScore', JSON.stringify([fromForm]));
                }

                pageIs = "hiScore";
                runPage(hiScore);

                //  create score list
                createHiScoreList();

            } else if (pageIs === 'hiScore') {

                //Clear score list
                if (e.target.textContent == 'Clear score' && localStorage.hiScore) {
                    let ul = document.getElementById('score-list').remove();
                    localStorage.clear();
                //for next page
                } else if (e.target.textContent == 'Go back') {
                    leftTime = totalTime;
                    elemTime.textContent = '0';
                    pageIs = "start";
                    runPage(pageStart);
                }
            }
        })
    }   
}


// DROP
function drop(answer, trueAnswer) {

    if (answer != trueAnswer && leftTime > 4) {
        leftTime -= 5;
    } else if (answer != trueAnswer && leftTime <= 5) {
        leftTime = 0;
    }

    if (answer != trueAnswer) {
        console.log('---');
        //console.log(btn[i]+'---');

    } else {
        console.log('+++');
        //console.log(btn[i]+'+++');

    }

}

//timer start
function startTimer() {
        let myTimer = setInterval(() => {

            if (leftTime == 0) {
                clearInterval(myTimer);
                finalScore = leftTime;
                elemTime.textContent = leftTime;
                pageIs = "allDone";
                runPage(allDone);
                let yourScore = document.getElementById('yourScore');
                yourScore.textContent = leftTime;

            } else if (pageIs === "allDone") {
                clearInterval(myTimer);
                finalScore = leftTime;
                elemTime.textContent = leftTime;
                let yourScore = document.getElementById('yourScore');
                yourScore.textContent = leftTime;

            } else if (leftTime >= 0) {
                elemTime.textContent = leftTime;
                --leftTime;
            }

        }, 1000);
};

// the hi score page from  header
let elemHiScore = document.getElementById('h_score');

elemHiScore.addEventListener('click', () => {
    pageIs = "hiScore";
    runPage(hiScore);
    createHiScoreList();
});

// create hiScore list
function createHiScoreList () {
    if (pageIs == 'hiScore') {
        let ul = document.getElementById('score-list');
        let arrHiScore = JSON.parse(localStorage.getItem('hiScore'));

        for (let i = 0; i < arrHiScore.length; i++) {
            let li = document.createElement("li"); 
            ul.appendChild(li);
            li.textContent = `${i + 1}. ${arrHiScore[i][0]}  -  ${arrHiScore[i][1]}`;
            
            if (i == 19) {
                break;
            }
        }
    }
}
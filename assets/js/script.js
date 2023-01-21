let cnt = document.getElementById('cnt');
let className = 'class ="cnt_title"';
let pageis = 'start';

let pageStart = `
    <h2 data-pageis="start"`+ className + `>Coding Quiz Challenge</h2>
    <p>
    Try to answer the following code-related questions within the time limit <br>
    Keep in mind that incorrect answers will penalize your score/time by top seconds!
    </p>
    <button class="btn">Start Quiz</button>
`;

let qstn1 = `
    <h2 `+ className + `>Question 1</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let qstn2 = `
    <h2 `+ className + `>Question 2</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let qstn3 = `
    <h2 `+ className + `>Question 3</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let qstn4 = `
    <h2 `+ className + `>Question 4</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let qstn5 = `
    <h2 `+ className + `>Question 5</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let allDone = `
    <h2 `+ className + `>all done</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;

let hiScore = `
    <h2 `+ className + `>hi score</h2>
    <button class="btn">Start Quiz</button><br>
    <button class="btn">Start Quiz</button>
`;


function runPage (page) {
    cnt.innerHTML = page;
    console.log(pageis);
    
    let btn = document.getElementsByClassName('btn');
    
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {

            if (pageis === 'start') {
                pageis = "qstn1";
                runPage(qstn1);

            } else if (pageis === 'qstn1') {
                pageis = "qstn2";
                runPage(qstn2);

            } else if (pageis === 'qstn2') {
                pageis = "qstn3";
                runPage(qstn3);

            } else if (pageis === 'qstn3') {
                pageis = "qstn4";
                runPage(qstn4);

            } else if (pageis === 'qstn4') {
                pageis = "qstn5";
                runPage(qstn5);

            } else if (pageis === 'qstn5') {
                pageis = "allDone";
                runPage(allDone);

            } else if (pageis === 'allDone') {
                pageis = "hiScore";
                runPage(hiScore);

            } else if (pageis === 'hiScore') {
                pageis = "start";
                runPage(pageStart);
            }

        })
    }   
    
}

runPage(pageStart); // start function

    // для правильных ответов

   // let dataIs = document.querySelector('h2'); // страница
    // console.log(dataIs.dataset.pageis);
    // pageis = dataIs.dataset.pageis;
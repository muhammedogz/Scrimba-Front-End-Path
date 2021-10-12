const bodyEl = document.querySelector("body");

const categoryArr = () => {
    const arr = [];
    while (true) {
        const random = Math.floor(Math.random() * 24) + 9;
        if (!arr.includes(random) && random != 13 && random != 30) 
            arr.push(random);
        if (arr.length == 4) break;
    }

    return arr;
};


async function getCategories(categoryId) {
    const res = await fetch(`https://opentdb.com/api.php?amount=4&category=${categoryId}&type=boolean`);
    const data = await res.json();
    return data.results;
}

function getQuestions() {
    const questionsArr = [];
    const randomArr = categoryArr();
    console.log('randomArr :>> ', randomArr);
    randomArr.forEach(rand => {
        getCategories(rand).then(questions => {
            questionsArr.push(questions);
            renderQuestions(questionsArr);
        });
    });
}

function renderQuestions(questions) {
    if (questions.length != 4) return;
    console.log('render part questions :>> ', questions);

    let questionHTML = "";
    

    for (const category of questions) {
        questionHTML += `<div class="question-block"><p class="category">` + category[0].category + `</p><div class="questions">`;
        let qValue = 1;
        
        for (const question of category) {
            questionHTML += `<p class="question q${qValue}00 text-helper">` + question.question + `</p>`;
            qValue++;
        }
        questionHTML += "</div></div>";
        
    }

    bodyEl.innerHTML = questionHTML; 


    showQuestions();
}

function showQuestions() {
    const questionsEl = document.querySelectorAll(".question");
    
    questionsEl.forEach(question => {
        question.addEventListener("click", () => {
            if (!question.classList.contains("focused-question"))
            {
                question.classList.add("focused-question");
            } else {
                question.classList.remove("focused-question");
            }
        });
    });
}

getQuestions();



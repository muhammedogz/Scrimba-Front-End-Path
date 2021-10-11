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
        questionHTML += `<div class="question-block"><p class="category">` + category[0].category + `</p>`;
        
        for (const question of category) {
            questionHTML += `<p class="question">` + question.question + `</p>`;
        }
        questionHTML += "</div>";
        console.log('questionHTML :>> ', questionHTML);
    }

    bodyEl.innerHTML = questionHTML; 
}

getQuestions();



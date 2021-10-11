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

async function getQuestions() {
    const questionsArr = [];
    const randomArr = categoryArr();
    console.log('randomArr :>> ', randomArr);
    randomArr.forEach(rand => {
        getCategories(rand).then(questions => {
            console.log(questions);
            questionsArr.push(questions);
        });
    }); 
    console.log('questionsArr :>> ', questionsArr);
    return questionsArr;
}

async function renderQuestions() {
    getQuestions().then(categories => {
        console.log('categories :>> ', categories);
        let questionHTML = "";
        console.log('categories.length :>> ', categories.length);
        categories.forEach(questions => {
                console.log('questions :>> ', questions);
        });
        for (let i = 0; i < 4; i++) console.log('ili :>> ', categories[i]);
    });
    
}

renderQuestions();



let scores = [];
let total_score = 0;
let questions = document.querySelectorAll('.question');
let question_active = document.querySelector('.active');
let item_active = document.querySelector('.active-item');

function active_question(){
    id_question = event.target.getAttribute('value');
    
    item_active.classList.remove('active-item');
    item_active = event.target;
    item_active.classList.add('active-item');

    question_active.classList.remove('active');
    question_active = document.querySelector(`#${id_question}`);
    question_active.classList.add('active');
}

function update_total_score(){
    total_score = 0;
    for (score of scores){
        total_score += +score;
    }
}

function update_score(){
    id_item = event.target.id.split('-')[0]
    indice_question = id_item.replace('q','')-1;
    value = event.target.getAttribute('value');

    scores[indice_question] = value;
    console.log(`div[value=${id_item}]`);
    progress_item = document.querySelector(`div[value=${id_item}]`);
    progress_item.classList.remove('gray');
    progress_item.classList.add('green');

    update_total_score();
}

function create_scores(){
    questions = document.querySelectorAll('.question');
    for (question of questions) {
        scores.push(-1);
    }
}

function show_result(){
    if (total_score > 0){

    }
}

function init(){
    create_scores();
}

init();
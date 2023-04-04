let scores = [];
let total_score = 0;
let id_question_active = 1;

let question_active = document.querySelector('.active');
let item_active = document.querySelector('.active-item');

const questions = document.querySelectorAll('.question');
const result = document.querySelector('.result');
const button = document.querySelector('#btn-mor');
const next_button = document.querySelector('.next');
const back_button = document.querySelector('.back');


function active_question(id_question=-1){
    if(id_question == -1){
        id_question = event.target.getAttribute('value');
    }

    item_active.classList.remove('active-item');
    item_active = document.querySelector(`div[value=${id_question}]`);
    item_active.classList.add('active-item');

    question_active.classList.remove('active');
    question_active = document.querySelector(`#${id_question}`);
    question_active.classList.add('active');
}

function active_before_question(){
    id_question_active -= 1;

    if (id_question_active==1){
        back_button.classList.add('hidden');
    }else if(id_question_active==questions.length-1){
        next_button.classList.remove('hidden');
    }
    active_question(`q${id_question_active}`);
}

function active_next_question(){
    id_question_active += 1;

    if (id_question_active==questions.length){
        next_button.classList.add('hidden');
    }else if(id_question_active == 2){
        back_button.classList.remove('hidden');
    }else{
        next_button.classList.remove('hidden');
    }

    active_question(`q${id_question_active}`);
}

function update_total_score(){
    total_score = 0;
    for (score of scores){
        total_score += +score;
    }

    if(!scores.includes(-1)){
        button.classList.remove('hidden');
        if (0 < total_score && total_score < 5){
            result.innerHTML = 'Impossível de interpretar';
        }else if (4 < total_score && total_score < 11){
            result.innerHTML = 'Disfunção erétil grave';
        }else if (12 < total_score && total_score < 16){
            result.innerHTML = 'Disfunção erétil moderada';
        }else if (17 < total_score && total_score < 21){
            result.innerHTML = 'Disfunção erétil leve';
        }else{
            result.innerHTML = 'Função erétil normal';
        }
    }

}

function update_score(){
    id_item = event.target.id.split('-')[0]
    indice_question = id_item.replace('q','')-1;
    value = event.target.getAttribute('value');

    scores[indice_question] = value;

    progress_item = document.querySelector(`div[value=${id_item}]`);
    progress_item.classList.remove('gray');
    progress_item.classList.add('green');

    update_total_score();
}

function show_result(){
    if (result.classList.contains('hidden')){
        result.classList.remove('hidden');
    }else{
        result.classList.add('hidden');
    }
}

function create_scores(){
    for (question of questions) {
        scores.push(-1);
    }
}

create_scores();

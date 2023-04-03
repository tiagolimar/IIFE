let scores = [];
let total_score = 0;
let questions = document.querySelectorAll('.question');
let question_active = document.querySelector('.active');
let item_active = document.querySelector('.active-item');
let result = document.querySelector('.result');

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

    if(!scores.includes(-1)){
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
    questions = document.querySelectorAll('.question');
    for (question of questions) {
        scores.push(-1);
    }
}

create_scores();

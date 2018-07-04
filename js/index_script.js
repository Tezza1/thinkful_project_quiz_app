'use strict';

function clickNext() {
    $('.js-submit-button').on('click', function(event){
        event.preventDefault();
        const navigation = [
            "quiz.html#css",
            "quiz.html#js",
            "html_quiz.html",
        ];
        
        let checkedItem = getOptionInfo(); 
        if (checkedItem < 0) {
            alert("Select a quiz")
        }
        else {
            window.location = navigation[checkedItem];
        }
    })   
}

function getOptionInfo(){
    let item = -1;

    $('form input').each(function(){
        if($(this).prop('checked')){
            item = $(this).val(); 
        }
    });

    return item;
}



function handleRadioOptions() {
    clickNext();
}

$(handleRadioOptions)

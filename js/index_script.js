'use strict';

function clickNext() {
    $('.js-submit-button').on('click', function(event){
        event.preventDefault();
        const navigation = [
            "html_quiz.html",
            "css_quiz.html",
            "js_quiz.html"
        ];
        
        let checkedItem = getOptionInfo(); 
        if (checkedItem < 0) {
            alert("Please select a quiz to proceed")
        } 
        else {
            window.location = navigation[checkedItem];
        }
    })   
}

function getOptionInfo(){
   let radioArr = [
     {
       name: "option1",
       el: 0,
       checked: $('#option1').prop('checked')
     },
     {
       name: "option2",
       el: 1,
       checked: $('#option2').prop('checked')
     },
     {
       name: "option3",
       el: 2,
       checked: $('#option3').prop('checked')
     },
     {
       name: "option4",
       el: 3,
       checked: $('#option4').prop('checked')
     }
    ];
    
    let item = -1;
    radioArr.map(opt => {
      if(opt.checked) {
        item = opt.el;
      }
    });
    
    return item;
}



function handleRadioOptions() {
    clickNext();
}

$(handleRadioOptions)

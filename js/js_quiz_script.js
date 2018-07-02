// store all quiz data in an array
const css_quiz_data = [
    {
        id: 0,
        question: "You want text on your website to be double-spaced by default. Which of the following line-height values is the best way to achieve this?",
        option_1: "150%",
        option_2: "2em",
        option_3: "2",
        option_4: "double",
        answer: 2, // "2em"
        explanation: "You could also use 200%. Whilst 'double' is not valid here."
    },
    {
        id: 1,
        question: "Which of the following CSS properties, used by itself, can cause HTML elements to overlap?",
        option_1: "z-index",
        option_2: "overflow",
        option_3: "background",
        option_4: "margin",
        answer: 3, // "margin"
        explanation: "Negative margins make things overlap."
    },
    {
        id: 2,
        question: "Which of the following effects is best achieved using a pseudo-element?",
        option_1: "In a flexible page layout, display the first line of a paragraph in bold text.",
        option_2: "Display the label of a checkbox in a different color when the checkbox is checked.",
        option_3: "Give the even and odd rows of a table different background colors.",
        option_4: "Add a drop-shadow to a hyperlink when a user hovers their mouse over it.",
        answer:  1, // "Display the first line of a paragraph in bold text.",
        explanation: "The other choices are all 'pseudo-classes'. A 'pseudo-class' is a particular state in which an actual HTML element can find itself. A 'pseudo-element' is a part of the document that CSS lets you style even though it isn’t an actual HTML element."
    },
    {
        id: 3,
        question: "How can you select all the PDF links?",
        option_1: "a[attribute='.pdf']",
        option_2: "a[href$='.pdf']",
        option_3: "href[attribute$='value']",
        option_4: "a[href^='.pdf']",
        answer: 1, // a[href$='.pdf']
        explanation: "The [attribute$='value'] selector is used to select elements whose attribute value ends with a specified value. The [attribute^='value'] selector is used to select elements whose attribute value begins with a specified value.The [attribute*='value'] selector is used to select elements whose attribute value contains a specified value."
    },
    {
        id: 4,
        question: "Which choice means select all p elements that are anywhere preceded by a div element?",
        option_1: "div ~ p",
        option_2: "div > p",
        option_3: "div + p",
        option_4: "div, p",
        answer: 0, // div ~ p
        explanation: "'div, p' -   Selects all div elements and all p elements. 'div > p' -   Selects all p elements where the parent is a div element. 'div + p'  -  Selects all p elements that are placed immediately after div elements"
    }
];

const js_quiz_data = [
    {
        id: 0,
        question: `What will the following log: <xmp>console.log(0.4 + 0.1 === "0.5");</xmp>`,
        option_1: "False",
        option_2: "True",
        option_3: "Undefined",
        option_4: "NaN",
        answer: 0, // "False"
        explanation: "But (0.4 + 0.1 == '0.5') will print out true."
    },
    {
        id: 1,
        question: `What will the following log:
                    let y = "5";
                    let x = + y;
                    console.log(typeof y + " " + typeof x);`,
        option_1: "string string",
        option_2: "string number",
        option_3: "string undefined",
        option_4: "string null",
        answer: 1, // "string number"
        explanation: "The unary + operator can be used to convert a variable to a number if possible, otherwise it will return 'NaN'."
    },
    {
        id: 2,
        question: `What will the following log:
                    let obj = {
                        mickey: 'mouse',
                        func: function() {
                            let self = this;   
                            (function() {
                                console.log(this.mickey + ' ' + self.mickey);
                            }());
                        }
                    };
                    obj.func();`,
        option_1: "mouse mouse",
        option_2: "undefined undefined",
        option_3: "undefined mouse",
        option_4: "nothing - the function won't run",
        answer: 2, // "undefined mouse"
        explanation: "In the outer function, both “this” and “self” refer to 'obj' and can access 'mickey'. In the inner function, 'self' remains within scope while 'this' can no longer access 'obj'."
    },
    {
        id: 3,
        question: `What will the following log:

                    let foo = ['this', 'array', 'is', 'full'];
                    let buzz = foo;
                    foo = [];
                    
                    let foo1 = ['this', 'array', 'is', 'full'];
                    let buzz1 = foo1;
                    foo1.length = 0;

                    console.log(buzz + ' ' + buzz1);`,
        option_1: "[] []",
        option_2: "[] [undefined]",
        option_3: "[this,array,is,full] [this,array,is,full]",
        option_4: "[this,array,is,full] []",
        answer: 3, // "[this,array,is,full] []"
        explanation: "When using foo = [], this creates a new empty array. However, if the array is referenced anywhere else, the original array will remain unchanged. This can lead to potential bugs when solving problems. A more robust method is foo1.length = 0, which not only clears the array but updates all reference variables that point to this original array."
    },
    {
        id: 4,
        question: `What will the following log:

                    'use strict';

                    let output = function(){
                        return 'Hello world!!!'
                    }
                    delete output;
                    console.log(output());`,
        option_1: "ƒ(){return 'Hello world!!!'}",
        option_2: "Error message",
        option_3: "undefined",
        option_4: "Hello world!!!",
        answer: 2, // "Error message"
        explanation: "'Error message - Delete of an unqualified identifier in strict mode.' When in strict mode, if delete is used on a direct reference to a variable, a function argument or a function name, it will throw a SyntaxError."
    }
];



// store score
// store progress

// check which option has been selected
// if correct update score
// show correct on screen
// append explanation

// if next without any selected options, throw an error.

// update score
// when progress reached five, display results on next


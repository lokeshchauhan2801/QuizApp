const questions = [
    {
        'ques' : 'What does the "print" function do in Python?',
        'a': 'Displays text on the screen',
        'b': 'Calculates mathematical expressions',
        'c': 'Defines a new variable',
        'd': 'Reads user input',
        'correct': 'a'
    },
    {
        'ques' : 'Which of the following is NOT a valid data type in Python?',
        'a': 'Integer',
        'b': 'Boolean',
        'c': 'Character',
        'd': 'List',
        'correct': 'c'
    },
    {
        'ques' : 'How do you declare a variable in Python?',
        'a': 'var x = 5;',
        'b': 'x = 5',
        'c': 'int x = 5',
        'd': 'Dim x As Integer = 5',
        'correct': 'b'
    },

  
    {
        'ques' : 'Which keyword is used to define a function in Python?',
        'a': 'method',
        'b': 'func',
        'c': 'def',
        'd': 'function',
        'correct': 'c'
    },
    {
        'ques' : 'What is the result of 2 + 3 in Python?',
        'a': '5',
        'b': '6',
        'c': '7',
        'd': '2 + 3',
        'correct': 'a'
    },
    {
        'ques' : 'Which symbol is used for single-line comments in Python?',
        'a': '/* ... */',
        'b': '# ...',
        'c': '-- ...',
        'd': '// ...',
        'correct': 'b'
    },
    {
        'ques' : 'Which of the following is an example of a Python list?',
        'a': '[1, 2, 3]',
        'b': '{1, 2, 3}',
        'c': '(1, 2, 3)',
        'd': '<1, 2, 3>',
        'correct': 'a'
    },
    {
        'ques' : 'How do you check the length of a list in Python?',
        'a': 'list.length()',
        'b': 'len(list)',
        'c': 'list.size()',
        'd': 'list.length',
        'correct': 'b'
    },
    {
        'ques' : 'Which of the following is used to define a multiline string in Python?',
        'a': '""" ... """',
        'b': '<< ... >>',
        'c': '[[ ... ]]',
        'd': '/// ... ///',
        'correct': 'a'
    },
    {
        'ques' : 'What is the output of "5 > 3 and 2 < 4" in Python?',
        'a': 'True',
        'b': 'False',
        'c': '5',
        'd': '3',
        'correct': 'a'
    },
    {
        'ques' : 'Which of the following is used to read input from the user in Python?',
        'a': 'input()',
        'b': 'read()',
        'c': 'get()',
        'd': 'user_input()',
        'correct': 'a'
    },
    {
        'ques' : 'What is the result of "7 // 3" in Python?',
        'a': '2.33',
        'b': '2',
        'c': '3',
        'd': '2.0',
        'correct': 'b'
    },
    {
        'ques' : 'Which module is used to work with regular expressions in Python?',
        'a': 'regex',
        'b': 're',
        'c': 'regexp',
        'd': 'regexlib',
        'correct': 'b'
    },
    {
        'ques' : 'What is the output of "list(range(3))" in Python?',
        'a': '[1, 2, 3]',
        'b': '[0, 1, 2]',
        'c': '[1, 2]',
        'd': '[0, 1, 2, 3]',
        'correct': 'b'
    },
    {
        'ques' : 'How do you remove an item from a list in Python?',
        'a': 'list.remove(item)',
        'b': 'list.delete(item)',
        'c': 'list.pop(item)',
        'd': 'list.discard(item)',
        'correct': 'a'
    },
    {
        'ques' : 'Which Python keyword is used to exit from a loop prematurely?',
        'a': 'stop',
        'b': 'exit',
        'c': 'break',
        'd': 'return',
        'correct': 'c'
    },
    {
        'ques' : 'What is the result of "2 ** 3" in Python?',
        'a': '6',
        'b': '9',
        'c': '8',
        'd': '5',
        'correct': 'c'
    },
    {
        'ques' : 'Which data structure in Python is ordered and indexed?',
        'a': 'Dictionary',
        'b': 'Set',
        'c': 'List',
        'd': 'Tuple',
        'correct': 'c'
    },
    {
        'ques' : 'In Python, how do you import an entire module named "math"?',
        'a': 'import math',
        'b': 'include math',
        'c': 'import "math"',
        'd': 'from math import *',
        'correct': 'a'
    },
    {
        'ques' : 'What is the result of "not True" in Python?',
        'a': 'True',
        'b': 'False',
        'c': 'None',
        'd': 'Error',
        'correct': 'b'
    }
];


let index = 0;
let total = questions.length ;
let right = 0;
let wrong = 0;
const quesbox = document.getElementById('quesbox')
const  optionInputs = document.querySelectorAll('.options') 
const loadquestion = ()=>{
    if(index==total){
        return endQuiz()
    }else{
        reset();

    }
    const data = questions[index]
    quesbox.innerText = ` ${index+ 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
} 

//submit function
const submitQuiz = ()=>{
    const ans = getAnswer()
    // console.log(ans , questions[index].correct)

    if(ans == questions[index].correct){
        right++ ;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=> {
            if(input.checked){
                 answer =  input.value ; 
            }
            
        }
    )
    return answer;

}
const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false ;
        }
    )
    }
const endQuiz =()=>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center"><h3> Thank you for playing </h3>
    <h2>${right}/${total} are correct </h2>
      </diV> `
    
}
// initial call loadquestion 
loadquestion()

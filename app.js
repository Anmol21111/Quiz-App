const quizData = [
    {
        'que':'Which of the following JavaScript cannot do?',
         'a': 'JavaScript can react to events',
         'b':'JavaScript can manipulate HTML elements',
         'c':'JavaScript can be use to validate data',
         'd':'All of the Above',
         'correct':'d'
    },
        {
        'que':'Whats so great about XML?',
         'a': 'Easy data exchange',
         'b':' High speed on network',
         'c':' Only B.is correct',
         'd':' Both A & B',
         'correct':'d'
    },
        {
        'que':'Which is not a property of attribute Behaviour of <Marquee> tag?',
         'a': 'alternate',
         'b':'blur',
         'c':'scroll',
         'd':'slide',
         'correct':'b'
    }
        ,{
        'que':'The attribute used to define a new namespace is.',
         'a': ' XMLNS',
         'b':' XmlNameSpace',
         'c':'Xmlns',
         'd':'XmlNs',
         'correct':'c'
    },
        {
        'que':'_________ keyword is used to declare variables in javascript.',
         'a': 'Var',
         'b':'Dim',
         'c':'String',
         'd':'None of the Above',
         'correct':'a'
    },
        {
        'que':'The href attribute in the link tag specifies the:',
         'a': ' Destination of a link',
         'b':'Link',
         'c':'Hypertext',
         'd':'None of the Above',
         'correct':'a'
    },
        {
        'que':'HTML Event Attributes onunload fires',
         'a': 'When the browser window has been closed',
         'b':'When the browser window is minimized',
         'c':'When the browser window has changed focus to other window',
         'd':'All of the Above',
         'correct':'a'
    },
        {
        'que':'Which of the following JavaScript cannot do?',
         'a': 'JavaScript can react to events',
         'b':'JavaScript can manipulate HTML elements',
         'c':'JavaScript can be use to validate data',
         'd':'After the page is finished loading',
         'correct':'a'
    },
        {
        'que':' HTML Form Events ___________, fires the moment that the element loses focus.',
         'a': 'onblur',
         'b':'onfocus',
         'c':'onchange',
         'd':'onlostfocus',
         'correct':'a'
    },
        {
        'que':' Twitter limits the number of characters per tweet is ?',
         'a': '130',
         'b':'160',
         'c':'124',
         'd':'140',
         'correct':'d'
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.que}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h2>Your Score are : </h2>
        <br>
            <h3 class="w-100"> Hii, you've scored :  ${correct}  &#9989; / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
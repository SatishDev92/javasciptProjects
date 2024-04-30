let arr = [
  {
      que: "What does DOM stand for in JavaScript?",
      a: "Document Object Model",
      b: "Data Object Model",
      c: "Document Oriented Model",
      d: "Dynamic Object Model",
      correct: "a"
  },
  {
      que: "Which keyword is used to declare a variable in JavaScript?",
      a: "var",
      b: "int",
      c: "string",
      d: "declare",
      correct: "a"
  },
  {
      que: "Which of the following is not a valid way to declare a function in JavaScript?",
      a: "function myFunction() {}",
      b: "var myFunction = function() {}",
      c: "myFunction: function() {}",
      d: "let myFunction = () => {}",
      correct: "c"
  },
  {
      que: "What does JSON stand for in JavaScript?",
      a: "JavaScript Object Notation",
      b: "javascript object networking",
      c: "javascript over network",
      d: "javascript oriented notation",
      correct: "a"
  }
];

const heading = document.querySelector("#ques");
const options = document.querySelectorAll(".option");
let index = 0;
let total = arr.length;
let right = 0, wrong = 0;

function check() {
  let selectedAnswer = null;
  options.forEach((input) => {
      if (input.previousElementSibling.checked) {
          selectedAnswer = input.previousElementSibling.id.replace("option_", ""); // Extracting the letter from the ID
      }
  });
  console.log("Selected Answer:", selectedAnswer);
  return selectedAnswer;
}

const quesload = () => {
  if (index === total) {
      end();
  } else {
      reset();
      const data = arr[index];
      heading.innerText = `${index + 1}) ${data.que}`;
      options[0].innerText = data.a;
      options[1].innerText = data.b;
      options[2].innerText = data.c;
      options[3].innerText = data.d;
  }
};

quesload();

const btn = document.querySelector("#bb");
btn.addEventListener("click", () => {
  const selectedAnswer = check();
  const data = arr[index];
  console.log("Correct Answer:", data.correct);
  console.log("Selected Answer:", selectedAnswer);
  if (selectedAnswer === data.correct) { // Comparison using single character strings
      right++;
      console.log("Right:", right);
  } else {
      wrong++;
      console.log("Wrong:", wrong);
  }
  if (index === total - 1) {
      end();
  } else {
      index++;
      quesload();
  }
});

function reset() {
  options.forEach((input) => {
      input.previousElementSibling.checked = false;
  });
}

function end() {
  document.querySelector("#card").innerHTML = `<h3>Thank you for playing the game</h3><br><h2>You have scored ${right}/${total}</h2>`;
}

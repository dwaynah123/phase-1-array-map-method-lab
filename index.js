const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => titlecase(tutorial));
}

function titlecase(tutorial){
  let words = tutorial.split(" ");
  for(let i = 0; i < words.length; i++) {
    let tcWord =  words[i];
    tcWord = tcWord.replace(tcWord.charAt(0), tcWord.charAt(0).toUpperCase())
    words[i] = tcWord;
  }
  return tutorial = words.join(" ")
}



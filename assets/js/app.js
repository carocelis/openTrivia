$('.start').click(function(event) {
  trivia();
});

function trivia() {
  $('.content-start').addClass('hide');

  let content  = document.querySelector('.div-question');

  fetch('https://opentdb.com/api.php?amount=15&category=23&difficulty=easy&type=multiple&lang=es')
  .then(function(response) {
    return response.json();
  })
      
  .then(function(data) {
    console.log(data);

    let answers = 0;
    let correctAnswers = [];
    let incorrectAnswers = [];
    let totalAnswers = [];

    data.results[answers].incorrect_answers.forEach(function(element) {
      incorrectAnswers.push(element);
    });
    totalAnswers.push(incorrectAnswers[2]);
    totalAnswers.push(data.results[answers].correct_answer);
    totalAnswers.push(incorrectAnswers[1]);
    totalAnswers.push(incorrectAnswers[0]);
    
    totalAnswers.sort();
    console.log(totalAnswers);


    //Let's make some HTML!
    let html = `<h4 class="title text-center">${data.results[0].question}</h4>
    <p class="title text-center">${totalAnswers[1]}</p>
    <p class="title text-center">${totalAnswers[3]}</p>
    <p class="title text-center">${totalAnswers[0]}</p>
    <p class="title text-center">${totalAnswers[2]}</p>`;

    //Put that HTML on the page
    content.innerHTML = html;
  })

  .catch(function(error) {
    alert("No es posible entregar la información")
  });
}


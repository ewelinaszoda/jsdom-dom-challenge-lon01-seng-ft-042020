document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('#counter');
  const plus = document.querySelector('#plus');
  const minus = document.querySelector('#minus');
  const heart = document.querySelector('#heart');
  const likesUL = document.querySelector('.likes');
  //  QUESTION NR 11 how to make that work
  // const likesUL = document.getElementByClassName("likes")[0]; ???
  const pause = document.querySelector('#pause');
  const submit = document.querySelector('#submit');
  const commentForm = document.querySelector('#comment-form');
  const div = document.querySelector('#list');

  // Other ways:
  // const timer = document.getElementById('counter');

  // ----------------------------------------------------------
  // the timer increment every second once the page has loaded
  // ----------------------------------------------------------

  // QUESTION NR 10 why that is working without invoke the function??????!!!!!!!!!!!!!!!!!!!!!!!!
  // window.setTimeout(function () {
  //   alert("WOW! It's working :)");
  // }, 500);

  // TIPS: The window.setInterval() method can be written without the window prefix.

  // QUESTION NR 10 why that is working without invoke the function????

  // !!!!!!!!!!!!!!!!!with const does not work!!!!!!!!!!!!!!!! ???????????

  const timeUp = setInterval(secondsUp, 1000);

  function secondsUp() {
    counter.innerText++;
  }

  //------------------------------------------------------------------------------
  // manually increment and decrement the counter using the plus and minus buttons
  //------------------------------------------------------------------------------

  plus.addEventListener('click', function () {
    // parseInt change "2" to 3 !!!!!!!!!!! IMPORTANT
    counter.innerText = parseInt(counter.innerText) + 1;
  });

  minus.addEventListener('click', function () {
    counter.innerText = parseInt(counter.innerText) - 1;
  });

  // --------------------------------------------------------------------------------
  // 'like' an individual number of the counter.
  // able to see count of the number of 'likes' associated with that number
  // --------------------------------------------------------------------------------

  // QUESTION NR 9 - function (event) { event.showLikes()} why not??
  // Why function(event) { event.preventDefault(); }
  heart.addEventListener('click', function () {
    showLikes();
  });

  function showLikes() {
    const likesLi = document.createElement('li');
    likesLi.innerText = counter.innerText + ' has been liked 1 time';
    const likesUL = document.querySelector('.likes');
    // use console.log to check what I get
    console.log(likesUL);
    likesUL.append(likesLi);
  }

  // -----------------------------------------------------------------------------
  // pause the counter, which should
  // - pause the counter
  // - disable all buttons except the pause button
  // - the pause button should then show the text "resume"
  // resume is clicked, it should restart the counter and re-enable the buttons
  // -----------------------------------------------------------------------------

  // QUESTION 13 HOw TO do function toggle of the pause button???

  pause.addEventListener('click', function () {
    if (pause.innerText === 'pause') {
      pause.innerText = 'resume';

      //stop the time
      clearInterval(timeUp);

      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
   
    } else {
      pause.innerText = 'pause';

      //  QUESTION NR 14 - can I write it different way ??? Or I need to write the function one more time
      // with that line is just continue the counter
   
      // continue the time
       timeUp = setInterval(secondsUp,1000)

      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
    }
  });

  //-------------------------------------------------------------------
  //  ability to leave comments
  //-------------------------------------------------------------------

  // DONE - QUESTION 15  where I need to add the argument event and when I do not need to
  // I need when I will use event after

  //QUESTION 16 - how to check event

  commentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // not working
    console.log(event);
    const comment = event.target[0].value;
    console.log(comment);
    const textOfComment = document.createElement('p');
    textOfComment.innerHTML = comment;
    div.append(textOfComment);
    commentForm.reset();
  });
});

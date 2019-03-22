import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
import Issue from "./doctor.js";


$(document).ready(function() {
  const docFirst = new FirstName();
  docFirst.getFirst();
  let firstName = $('#firstName').val();
  console.log(firstName);
  setTimeout(function() {
    $(".output").text(docFirst);
    // (firstName.data[0][2]).length;
    // const word = (dino.data[0][2]);
    // console.log(word);
    // const blanks = dino.gameWord(word);
    // console.log(blanks);
    // $(".dino-output").text(blanks);
    // let first = $('#firstName').val();
    // let last = $('#lastName').val();

    $('.userQuery').submit(function(event) {
      event.preventDefault();
    });

  }, 200);

});

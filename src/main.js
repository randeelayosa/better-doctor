import $ from 'jquery';
import Issue from "./doctor.js";


$(document).ready(function() {
  const docFirst = new FirstName();
  docFirst.getFirst();
  $('.userQuery').submit(function(event) {
    event.preventDefault();
    let firstName = $('#firstName').val();
    console.log(firstName);
  });

  promise.then(function(response) {
    const body = JSON.parse(response);
    setTimeout(function() {
      $(".output").text(docFirst);
      that.data = body;
    }, 2000);

  });
});

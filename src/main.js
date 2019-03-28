import $ from 'jquery';
import './sass/styles.scss';
import { Doc }  from "./doctor.js";


$(document).ready(function() {
  $('.userQuery').submit(function(event) {
    event.preventDefault();
    const issue = $("#issue").val();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();

    const doctor = new Doc();
    let promise = doctor.getDoc(issue, firstName, lastName);

    promise.then(function(response) {
      const body = JSON.parse(response);
      doctor.getData(body);
    });
    $(".output").show();
    $(".userQuery").hide();
  });
});

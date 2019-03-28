import $ from 'jquery';
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
      // const parseFirst = body.data[i].profile.first_name;
      // const parseLast = body.data[i].profile.last_name;
      // const parseIssue = body.data[0].specialties[0].description.includes(`${issue}`);
      // const parsePhone = body.data[0].practices[0].phones[0].number;
      // const parseAccPat = body.data[0].practices[0].accepts_new_patients;
      // const parseStreet = body.data[0].practices[0].visit_address.street;
      // const parseSuite = body.data[0].practices[0].visit_address.street2;
      // const parseCity = body.data[0].practices[0].visit_address.city;
      // const parseState = body.data[0].practices[0].visit_address.state;
      // const parseZip = body.data[0].practices[0].visit_address.zip;
      // const address = (parseStreet+", "+parseSuite+", "+parseCity+", "+parseState+" "+parseZip);
      // const parsePhoto = body.data[0].profile.image_url;

      // console.log(body.data[0].specialties[0].description.includes(`${issue}`));
      // console.log(parseFirst);

      // $(".output").text("Dr. "+parseFirst+" "+parseLast);
      // $(".output").append(parsePhone);
      // $(".output").append(address);
    });
  });
});

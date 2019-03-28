import $ from 'jquery';

export class Doc {
  getDoc(issue, firstName, lastName){
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${issue}&location=or-portland&skip=0&limit=30&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
      request.open("GET", url, true);
      request.send();
    });
  }


  getData(body){
    // body.data[i].specialties[0].description.includes(`${issue}`) = true;
    for(let i=0; i<body.data.length; i++){
      if(body.data[i].profile.length === 0) {
        $(".output").text(`<div class="no-result">There are no results that match your search.</div>`);
      }else{
        $(".output").append(`<div class="results">Dr. ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} <br> Specialty: ${body.data[i].specialties[0].description} <br> ${body.data[i].practices[0].phones[0].number} <br> ${body.data[i].practices[0].visit_address.street} <br> ${body.data[i].practices[0].visit_address.street2} <br> ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}</div>`);
      }
      if(body.data[i].practices[0].accepts_new_patients === true) {
        $(".output").append(`<div class="results">Accepting new patients: Yes</div>`);
      }else{
        $(".output").append(`<div class="results">Accepting new patients: No</div>`);
      }
    }
  }
}

export class FirstName {
  getFirst(firstName){
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&location=or-portland&user_location=45.5122%2C%20.122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
      request.open("GET", url, true);
      request.send();
    });
  }
}



//
// export class LastName {
//   getData(){
//     const promise = new Promise(function(resolve, reject) {
//       const request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&sort=first-name-asc&skip=0&limit=10&user_key=4099e3d0c4a9764540a70e1e72e188de`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       that.data = body;
//     }, function(error) {
//       console.log(error);
//     });
//   }
// }

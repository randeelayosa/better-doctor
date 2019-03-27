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
}


// export class DataArr {
//   getData(data){
//     for(let i=0; i<data.length; i++){
//       return data[i];
//     }
//   }
// }

// export class Accepting {
//   accPat(data){
//     if(parseAccPat === true){
//        return "yes";
//     }else{
//      return "no";
//     }
//     }
//   }
// }

// export class Picture {
//   profPic(data){
//     if(parsePhoto === ""){
//        return "";
//     }else{
//      return parsePhoto.text;
//     }
//     }
//   }
// }


function scoreChecker(score) {
  // Tulis kodingan dibawah ini
  if(score >= 90){
    result ='Selamat! Anda mendapatkan nilai A.';
  } 
  else if (score >= 80 && score < 90){
    result ='Anda mendapatkan nilai B.';
  
  } else if (score >= 70 && score < 80){
    result ='Anda mendapatkan nilai C.';

  } else if (score >= 60 && score < 70){
    result ='Anda mendapatkan nilai D.';

  } else if(score < 60){
    result ='Anda mendapatkan nilai E';
  }
 
  return result;
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.

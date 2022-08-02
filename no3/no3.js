function isAnagram(word1,word2) {

  let kata1 = word1.trim().toLowerCase().replace(/\s/g,'');
  let kata2 = word2.trim().toLowerCase().replace(/\s/g,'');
  

  for (let i = 0; i < kata2.length; i++){
    if (kata1.length !== kata2.length || kata1.indexOf(kata2[i]) === -1)
      return false; 
  }
  return true;
  console.log(kata1.length);
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
console.log(isAnagram('cicak', 'cicaaak')); // False

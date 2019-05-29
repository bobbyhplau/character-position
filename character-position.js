function characterPosition(str) {

  var obj = {};

  for (var i = 0; i < str.length; i++) {

    letter = str.charAt(i);

    if (letter != " ") {
      if (!(obj[letter])) {
        obj[letter] = [i];
      } else {
        obj[letter].push(i);
      }
    }
  }

  return obj;
}

console.log(characterPosition("lighthouse in the house"));
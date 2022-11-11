const repeatString = function(x, y) {
    
    let finalString = x;

    if (y < 0) {
        finalString = 'ERROR';
    } else if (y == 0) {
        finalString = '';
    } else {
    for (let i = 1; i < y; i++) {
      finalString = finalString + x;
    } 
    }
    return finalString;
  };

  //above code fails if 

//repeatString('hey', 5);

// Do not edit below this line
module.exports = repeatString;

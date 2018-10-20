// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
    if (distance > 2000 && distance < 2500) {
      return 'I will gladly take your thirty bucks.';
  }
    if (distance > 2500) {
      return 'No can do.';
  }
}


function ternaryCheckCity(city) {
/*
switch (city) {
  case "NYC":
    return 'Ok, sounds good.';
  default:
    return 'No go.';
  }
}
*/
let msg;
city === 'NYC' ? (msg='Ok, sounds good.') : (msg='No go.');
return msg;
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
     return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Write your code in this file!

function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance >= 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance >= 2501) {
    return 'No can do.';
  }
} 

function ternaryCheckCity(city) {
  // if (city = NYC)
  // return 'Ok, sounds good.'
  return city === 'NYC' 
    ? 'Ok, sounds good.' 
    : 'No go.';
}

  
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

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


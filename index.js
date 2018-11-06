function scuberGreetingForFeet(distance) {
  
   if (distance <=400) {
    return 'This one is on me!';
  }
  
  else if (distance >=2500) {
    return 'No can do.';
  }
  
  else if (distance >=2001) {
    return 'I will gladly take your thirty bucks.';
  }
  
  
}

function ternaryCheckCity (city) {
  
  if ('NYC'==city) {
    return 'Ok, sounds good.'; 
  } else {
    return 'No go.';
  }
  
}


function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';

    case 'not as generous':
        text = "Thank you.";
        break; 
        
    default: 
         text = 'Bye.';
         break;
  }
  return text
}




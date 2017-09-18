function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}
/*
function sayHiToGrandma(string){
  var deaf = "I can't hear you!"
  return deaf
}

function sayHiToGrandma(string){
  var loud = "YES INDEED!"
  return loud
}
*/
function sayHiToGrandma(string){
  if (shout().toEqual(string.toUpperCase()))
  return "YES INDEED!"
}

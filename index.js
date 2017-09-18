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

function sayHiToGrandma(string){
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var love = 'I love you'
  if (uppercase.toUpperCase === uppercase) {
    return "YES INDEED!"
  }
  else if (lowercase.toLowerCase === lowercase) {
    return "I can't hear you!"
  }
  else if (love){
    return "I love you, too."
  }
}

function sayHiToGrandma(string){
  if (string.toUpperCase()){
    return "YES INDEED!"
  }
}

function sayHiToGrandma(string){
  if (string = "I love you, Grandma") {
    return "I love you, too"
  }
}

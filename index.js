var katzDeliLine = [ ]

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0)
  return ('There is nobody waiting to be served!')
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`) 
}
}
var katzDeliLine = [ ]
function currentLine(katzDeliLine){
  
  if (katzDeliLine.length === 0)
  return ('The line is currently empty.')
  else{
    for (i=0; i<katzDeliLine.length; i++) {
      var nameNumber[i] = ""+ ${i}"."${katzDeliLine[i]}
    }
  return (`The line is currently: ${nameNumber}` )
  }
}
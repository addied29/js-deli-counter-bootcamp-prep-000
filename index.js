var katzDeliLine = [ ]
var i=0

function takeANumber(katzDeliLine){
  i++
  katzDeliLine.push(i)//
  return(`You are number ${katzDeliLine.length}`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
  return ('There is nobody waiting to be served!')
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`) 
}
}
var katzDeliLine = [ ]
function currentLine(katzDeliLine){
 var nameNumber=[] 
  if (katzDeliLine.length === 0)
  return ('The line is currently empty.')
  else{
    for (let i=0; i<katzDeliLine.length; i++) {
      nameNumber[i] = ` ${i+1}. ${katzDeliLine[i]}`
    }
  return (`The line is currently:${nameNumber}` )
  }
}
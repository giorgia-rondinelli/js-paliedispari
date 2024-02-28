const pariDispari= prompt('Scegli pari o dispari')
const num1= parseInt(prompt('Scegli un numero da 1 a 5'))
console.log(pariDispari,num1)
const num2= estrazioneCasuale(1,5)
console.log(num2)

const somma=num1+num2
console.log(somma)

sommaPariDispari(somma)
const output= document.getElementById('output')
console.log(output)
if(risultato===pariDispari){
output.innerHTML=`il giocatore ha scelto ${pariDispari}.<br>
 Il numero scelto dal giocatore è ${num1} e il numero estratto dal computer è ${num2}.<br>
la somma dei due numeri è ${somma} quindi il giocatore vince `
}
else{
  console.log('hai perso')  
  output.innerHTML=`il giocatore ha scelto ${pariDispari}. Il numero scelto dal giocatore è ${num1} e il numero estratto dal computer è ${num2}.
  la somma dei due numeri è ${somma} quindi il giocatore perde.`
  

}

 


// funzioni

function estrazioneCasuale (min, max){
  
const numeroEstratto= Math.floor(Math.random()*(max-min+1)+min)
return numeroEstratto
}



function sommaPariDispari(somma){
  if(somma%2===0){
    risultato= 'pari'
  
    console.log(risultato)
  }
  else{
    risultato= 'dispari'
    console.log(risultato)
  }
  return risultato
}



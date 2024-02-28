let parola= prompt('inserisci una parola')
console.log(parola)

let parolaInversa= inverto(parola)
console.log(parolaInversa)
if(parola===parolaInversa){
  console.log('la parola è palindroma ')
  
}
else{
  console.log('la parola non è palindroma')
}



function inverto(parola ){
 let parolaDivisa= parola.split('')
 console.log(parolaDivisa)
 let arrayinveso= parolaDivisa.reverse()
 console.log(arrayinveso)
 return arrayinveso.join('')
}




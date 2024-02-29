
const parola= prompt('inserisci parola')

console.log(parola)
const parolaGirata= inverto(parola);
console.log(parolaGirata)


if(ispalindroma(parola,parolaGirata)){
  console.log('la parola è palindroma')
}
else{
  console.log('la parola non è palindroma ')
}




function inverto(parolaDaGirare){

  let parolaAlContrario="";
  for(let i=parolaDaGirare.length-1; i>=0; i-- ){
    parolaAlContrario += parolaDaGirare[i];
  }

  return parolaAlContrario 
}

  function ispalindroma(parolaOriginale, parolaRigirata){
    return parolaOriginale=== parolaRigirata;
  }




// let parolaInversa= inverto(parola)
// console.log(parolaInversa)
// if(parola===parolaInversa){
//   console.log('la parola è palindroma ')
  
// }
// else{
//   console.log('la parola non è palindroma')
// }



// function inverto(parola ){
//  let parolaDivisa= parola.split('')
//  console.log(parolaDivisa)
//  let arrayinveso= parolaDivisa.reverse()
//  console.log(arrayinveso)
//  return arrayinveso.join('')
// // }
// const parolaDivisa= parola.split('')
// console.log(parolaDivisa)
// inverto(parolaDivisa)


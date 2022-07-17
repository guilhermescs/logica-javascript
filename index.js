
// Exercício 1
var nome = "Guilherme Santos Cardoso"
console.log(nome)

// Exercício 2
var numeroA = 10
var numeroB = 8
var resultado = numeroA * numeroB
console.log(resultado)


// Exercício 3
function saudacao() {
    console.log("Oi eu sou o Goku!");
  }
  
  saudacao ();


// Exercício 4

function multiplica(A,B) {
    return A*B
}
    console.log (multiplica(50,4))



// Exercício 5
function podeDirigir(idade){
    if (idade >= 18) {
        return ("Você pode dirigir")
    }
    else {
        return ("Você não pode dirigir")
    }
}

console.log(podeDirigir(idade = 13))


// Exercício 6
for (var i = 0; i <= 20; i++){
    console.log(i)
}

// Exercício 7
for (var i = 0; i <= 20; i++){
    if ((i % 2) == 0){
        console.log(i)
    }
}


//Exercício 8
function tabuada(numA) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numA} x ${i}: ${numA * i}`);
    }
  }
  
  tabuada(7);


// Exercício 9
function converterEmHoras(minutes){
    console.log(minutes/ 60, "Hora(s)")
}
converterEmHoras(150)

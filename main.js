console.log(' Piedra, papel o tijera!!!')
console.log('\n Reglas: \n Piedra le gana a tijera \n Papel le gana a piedra \n Tijera le gana a papel \n Opciones iguales empatan')
console.log('\n Opciones \n1 piedra \n2 papel \n3 tijera')
var j1 = prompt('Jugador 1, elije una opción: 1 Piedra: 2 Papel: 3 Tijera:')
console.log('\nEl jugador 1 eligió ' + j1  )
var j2 = prompt('Jugador 2, elije una opción: 1 Piedra: 2 Papel: 3 Tijera:')
console.log('\nEl jugador 2 eligió ' + j2  )

if(j1 == 1 && j2==1){
    console.log('\nEl resultado es un empate')
}
else if( j1 == 2 && j2==2){
    console.log('\nEl resultado es un empate')
}
else if( j1 == 3 && j2==3){
    console.log('\nEl resultado es un empate')
}
else if( j1 ==1 && j2==2){
    console.log('\nEl jugador 2 gana')
}
else if( j1 == 1 && j2 ==3){
    console.log('\nEl jugador 1 gana')
}
else if( j1 ==2 && j2 ==1){
    console.log('\nEl jugador 1 gana')
}
else{
    console.log('\nEl jugador 2 gana')
}
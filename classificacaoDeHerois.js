
// declaração das variaveis.

let nomeHeroi = Batman
let pontuacao = 1000

// estrutura de decisão

if (pontuacao >= 1000) {
	let xp ="Ferro"
}
else if (pontuacao <= 1001 && pontuacao >=2000 ) {
	let xp ="Bronze"
}
else if (pontuacao <= 2001 && pontuacao >=5000 ) {
	let xp ="Prata"
}
else if (pontuacao <= 5001 && pontuacao >=6000 ) {
	let xp ="Dourado"
}
else if (pontuacao <= 6001 && pontuacao >=7000 ) {
	let xp ="Ouro"
}
else if (pontuacao <= 7001 && pontuacao >=8000 ) {
	let xp ="Platina"
}
else if (pontuacao <= 8001 && pontuacao >=9000 ) {
	let xp ="Ascendente"
}
else if (pontuacao <= 9001 && pontuacao >=10000 ) {
	let xp ="Imortal"
}
else{
	let xp ="Radiante"
}

// saida de dados

console.log( "O Heroi de nome " + nomeHeroi + ", esta no nivel " + xp + ".")

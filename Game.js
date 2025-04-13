//Definindo rodadas
let rodadas = 0;

//Definindo vida
let energiaPikachu = 80;
let energiaCharmander = 80;

//Definindo ataque
let ataquePicachu = 0;
let ataqueCharmander = 0;

//Começar o While
while (energiaPikachu >= 0 && energiaCharmander >= 0) {
    //Definindo o numero do dano
    let ataquePicachu = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    let ataqueCharmander = Math.floor(Math.random() * (22 - 8 + 1) + 8);
    //Redefinindo vida
    energiaPikachu -= ataqueCharmander
    energiaCharmander -= ataquePicachu
    //Printando no Terminal
    console.log("🔁 Rodada", rodadas);
    console.log(`💥💥 Pikachu usou Thunderbolt e causou ${ataquePicachu} de dano!`);
    console.log(`💥💥 Charmander usou Burning Flame e causou ${ataqueCharmander} de dano!`);
    console.log(`⚡ Energia do Charmander: ${energiaCharmander}`);
    console.log(`🔥 Energia do Pikachu: ${energiaPikachu}`);
    console.log("--------------------------------------------------------------------------------");
    rodadas++;
}
//Mostrando quantas batalhas foram necessarias
console.log(`👌A batalha acabou com ${rodadas} rodadas👌`)
//Usando if e else para ver quem ganhou e printar no terminal
if (energiaCharmander > energiaPikachu) {
    console.log("🏆 Charmander venceu a batalha com um fogo ganhador!")
} else if (energiaPikachu > energiaCharmander) {
    console.log("🏆 Pikachu venceu a batalha com um trovão ganhador!")
} else {
    console.log("😒Ouve um mortal impate")
}
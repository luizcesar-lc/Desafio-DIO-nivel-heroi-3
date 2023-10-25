/*se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken) */

// Classe genérica para representar um herói de uma aventura
class heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar
  atacar() {
    console.log(`o ${this.tipo} atacou usando ${this.getAtaque()}`);
  }

  // Método para obter o ataque
  getAtaque() {
    // Retorna o ataque apropriado de acordo com o tipo do herói
    switch (this.tipo) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      case "ninja":
        return "shuriken";
      default:
        return "ataque padrão";
    }
  }
}

// Principal
const nomeHeroi =prompt("Qual nome do seu herói?");
const idadeHeroi = Number(prompt("Qual idade do seu herói?"));
const tipoHeroi = prompt("Qual tipo do seu herói?");


let heroiMago = new heroi(nomeHeroi, idadeHeroi, tipoHeroi)

heroiMago.atacar()

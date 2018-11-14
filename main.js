// contains all the pokemon requested
let POKEMON = [];

// ==========
class Trainer {
  constructor(name) {
    this.name = name;

  }

  all() {
    return POKEMON;

  }
};

let trainer = new Trainer('Elite 4 Chris');

// ===
class Pokemon {
  constructor(name, hp, atk, def, image, abilities) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.image = image;
    this.abilities = [];

  }
}



function daPokemons(pokemonsName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      var pokeId = data.stats["id"];
      pokeId = parseInt(pokeId);
        if (pokeId > 9 && pokeId < 100) {
          pokeId = pokeId.toString();
          pokeId = '0' + pokeId;
        }
        else if (pokeId < 10) {
          pokeId = pokeId.toString();
          pokeId = '00' + pokeId;
        }
        {
        let pokemon = {
          name: data.name,
          hp: data.stats[5].base_stat,
          attack: data.stats[4].base_stat,
          defense: data.stats[3].base_stat,
          ability1: data.abilities[0].ability.name,
          ability2: data.abilities[1].ability.name,
          ability3: data.abilities[2].ability.name,
        }
        console.log(pokemon);
        POKEMON.push(pokemon);
      }

    }
}




  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/" + pokemonsName + ".json",  true);
  xhttp.send();
}




// function getDusclops() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       data =  JSON.parse(this.responseText);
//       // console.log(data);
//       {
//         let dusclops = {
//           name: data.name,
//           hp: data.stats[5].base_stat,
//           attack: data.stats[4].base_stat,
//           defense: data.stats[3].base_stat,
//           ability1: data.abilities[0].ability.name,
//           ability2: "none",
//           ability3: "none",
//           image: "dusclops.gif"
//         }
//         console.log(dusclops);
//         POKEMON.push(dusclops);
//         writeToScreen(dusclops);
//       }
//     }
//   };

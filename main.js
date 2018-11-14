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

// var searchbtn = document.getElementById("searchbtn");
// searchbtn.addEventListener("click", daPokemons);



function daPokemons(pokemonsName) {
    var pokemon = document.getElementById("searchbox").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      var id = data["id"];
          if (id > 9 && id < 100) {
            id = id.toString();
            id = "0" + id;
          }
          else if(id < 10) {
            id = id.toString();
            id = "00" + id;
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
        writeToScreen(pokemon);
      }

    }
}




  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/" + pokemonsName + ".json",  true);
  xhttp.send();
}

function writeToScreen(pokemon) {
  // grab html elements
  // change innerHTML for each element to current pokemon property

   var pokeImages = document.getElementById("pokeImages");
   var pokeName = document.getElementById("pokeName");
   var pokeAttack = document.getElementById("pokeAttack");
   var pokeDefense = document.getElementById("pokeDefense");
   var pokeAbility1 = document.getElementById("pokeAbility1");
   var pokeAbility2 = document.getElementById("pokeAbility2");
   var pokeAbility3 = document.getElementById("pokeAbility3");

   pokeName.innerHTML = "Name: " + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
   pokeAttack.innerHTML = "Attack: " + pokemon.attack;
   pokeDefense.innerHTML = "Defense: " + pokemon.defense;
   pokeAbility1.innerHTML = "Ability1 :" + pokemon.ability1.charAt(0).toUpperCase() + pokemon.ability1.slice(1);;
   pokeAbility2.innerHTML = "Ability2: " + pokemon.ability2.charAt(0).toUpperCase() + pokemon.ability2.slice(1);;
   pokeAbility3.innerHTML = "Ability3: " + pokemon.ability3.charAt(0).toUpperCase() + pokemon.ability3.slice(1);;
 }

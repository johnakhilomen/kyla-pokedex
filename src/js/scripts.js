let pokemonRepository = (function() {

  const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=180';
  let pokemonList = [];

  function loadList() {
  fetch(apiURL)
  .then(response => response.json())
  .then(response =>
  {
    pokemonList = response.results;
    pokemonList.forEach(pokemon => {

      let newPokemonList = document.querySelector('.pokemon-list');
      let listItemPokemon = document.createElement('li');
      listItemPokemon.classList.add('col-sm-4');
      listItemPokemon.classList.add('col-md-3');
      listItemPokemon.classList.add('col-lg-2');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-name-btn');
      button.classList.add('col');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#exampleModal');
      button.addEventListener('click', function() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response=>response.json())
        .then(response=>{
          
          pokemonHeight = `${response.height}`;
          pokemonWeight = `${response.weight}`;
          pokemonTypes = `${response.types.map(function (pokemon) {
            return pokemon.type.name;
          })}`;
          pokemonAbilities = `${response.abilities.map(function (pokemon) {
            return pokemon.ability.name;
          })}`;
          let pokemonDetails = $('<p>' + 'Height: ' + pokemonHeight + '<br />' + 'Weight: ' + pokemonWeight + '<br />' + 'Type(s): ' + pokemonTypes + '<br />' + 'Abilities: ' + pokemonAbilities + '</p>');
          pokemonDetails.attr('class', 'col');
          let pokemonImg = (`<img class='col' src="${response.sprites.front_shiny}">`);
          $('.modal-title').html(pokemon.name);
          $('.modal-body').html('')
          $('.modal-body').append(`${pokemonImg}`, pokemonDetails);
        })
      
        .catch(err=>console.error(err));
        alert(pokemonDetails);
      });

      listItemPokemon.appendChild(button);
      newPokemonList.appendChild(listItemPokemon);
      })
    })
    .catch(error=>console.log(error))
  };

  function getAll() {
    loadList();
  };

  function add(pokemon) {
    return pokemonList.push(pokemon);
  };

  function showDetails(pokemon) {
    console.log(pokemon)
  };

  return {
    getAll: getAll,
    add: add,
    showDetails: showDetails,
    loadList: loadList,
  };
})();

pokemonRepository.getAll();

let pokemonRepository=function(){const e="https://pokeapi.co/api/v2/pokemon/?limit=180";let t=[];function o(){fetch(e).then(e=>e.json()).then(e=>{(t=e.results).forEach(e=>{let t=document.querySelector(".pokemon-list"),o=document.createElement("li");o.classList.add("col-sm-4"),o.classList.add("col-md-3"),o.classList.add("col-lg-2");let n=document.createElement("button");n.innerText=e.name,n.classList.add("pokemon-name-btn"),n.classList.add("col"),n.setAttribute("data-toggle","modal"),n.setAttribute("data-target","#exampleModal"),n.addEventListener("click",function(){fetch(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then(e=>e.json()).then(t=>{pokemonHeight=`${t.height}`,pokemonWeight=`${t.weight}`,pokemonTypes=`${t.types.map(function(e){return e.type.name})}`,pokemonAbilities=`${t.abilities.map(function(e){return e.ability.name})}`;let o=$("<p>Height: "+pokemonHeight+"<br />Weight: "+pokemonWeight+"<br />Type(s): "+pokemonTypes+"<br />Abilities: "+pokemonAbilities+"</p>");o.attr("class","col");let n=`<img class='col' src="${t.sprites.front_shiny}">`;$(".modal-title").html(e.name),$(".modal-body").html(""),$(".modal-body").append(`${n}`,o)}).catch(e=>console.error(e)),alert(pokemonDetails)}),o.appendChild(n),t.appendChild(o)})}).catch(e=>console.log(e))}return{getAll:function(){o()},add:function(e){return t.push(e)},showDetails:function(e){console.log(e)},loadList:o}}();pokemonRepository.getAll();
import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import  PokemonService from '../services/pokemon-service'
import  PokemonSearch from '../components/pokemon-search'
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
 

const PokemonList: FunctionComponent = () => {
  /*const pokemons = usePokemons(); utiliser le hook personnalisé*/
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
      PokemonService.getPokemons().then(
        pokemons=> setPokemons(pokemons)
        )      
  }, []);

  const history = useHistory();

  const addPokemon = () =>{
    history.push('/pokemons/add');
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="row"> 
      </div>
      <div className="container"> 
        <div className="row">
          <PokemonSearch/> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
        <Link className="btn-floating halfway-fab waves-effect waves-Ligth z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to='pokemon/add'>
          <i className="material-icons">add</i>
       </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;

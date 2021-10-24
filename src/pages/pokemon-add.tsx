import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import  PokemonService from '../services/pokemon-service'
 
  
const PokemonAdd: FunctionComponent = () => {
  const [id] = useState<number>(new Date().getTime());  
  const [pokemon] = useState<Pokemon>(new Pokemon(id));
    
  return (
    <div className="row">
            <h2 className="header center">Ajouter un pokemon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
}
  
export default PokemonAdd;
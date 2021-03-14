import React, { Component } from 'react'
import Header from '../../component/Header/Header'
import Main from '../../component/Main/Main'
import './Atc.css'

class Atc extends Component {
    state = {
        pages: [
            {
                page: '1/2'
            },
            {
                page: '2/2'
            }
        ]
    }

    getPokemons = require('json-pokemon/getPokemon');
    pokemons = this.getPokemons();

    typePokemons = this.pokemons.forEach(pokemon => {
        let sort = pokemon.typeList.slice().sort((x, y) => x - y);

        console.log(sort);
        
        // for (let type of pokemon.typeList) {
  
        //     console.log(type);
            
        // }
 
        


        
    });

    render() {
    //    console.log(this.typePokemons);
       
        return (
            <div className='Atc'>
                <Header title={'Какая у вас АТС?'} />
                <Main 
                    pokemons={this.pokemons}
                />
            </div>
        )
    }
}

export default Atc



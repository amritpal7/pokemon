import React from 'react';
import Pokecard from './pokecard.component';

class Pokedex extends React.Component {
    render() {
        return (
            <div className='Pokedex'>
                <Pokecard 
                    id={1}
                    name='Charmender'
                    type='fire'
                    exp={34}
                />
            </div>
        )
    }
} 


export default Pokedex;
import React from 'react'
import AtcItems from './AtcItems/AtcItems'
import Button from '../UI/Button/Button'
import svg from '../../assets/images/arrow.svg'

import './Main.css'

const Main = props => (
    <div className="Main">
      <AtcItems 
        pokemons={props.pokemons}
      />
      <Button
        onClick={() => console.log('test')}
        disabled={true}
      >
        Перейти к следующему шагу <img src={svg} alt=""></img>
      </Button>
    </div>
)

export default Main
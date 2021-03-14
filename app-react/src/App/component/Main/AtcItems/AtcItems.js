import React from 'react'
import './AtcItems.css'

const AtcItems = props => (
  <div className="AtcItems">
    <div className="item item_no">
      <a href="">У меня нет АТС</a>
    </div>
  
  {props.pokemons.map((pokemon, index) => {
    let title = pokemon.typeList;
    // console.log(title);
    return (
      
      <div className="item"> 
      
        <ul className="title"> 
        {/* <AtcTitle title={pokemon.typeList}/> */}
          <li>Сайт ZORNET.RU</li>
          <li>Скрипты сайта</li>

        </ul>

      </div>
    



    )
  })}  

  

  
  </div>
)  

export default AtcItems
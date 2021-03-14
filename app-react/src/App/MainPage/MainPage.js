import React, {Component} from 'react'
import Header from '../../component/Header/Header'
import Main from '../../component/Main/Main'

import './MainPage.css'

class MainPage extends Component {

    state= {
        button: false,
        items: []
    }

    

    render() {
        return (
            <div className='MainPage'>
                <Header title='1/2 Какая у вас АТС?'/>
                <Main/>
            </div>
        )
    }
}

export default MainPage

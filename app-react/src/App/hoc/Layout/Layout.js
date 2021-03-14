import React, {Component} from 'react'
import './Layout.css'
// import img from '../../assets/images/bg.jpg'

class Layout extends Component {
    render() {
        return (
            <div className='Layout'>
                <main>
                    {this.props.children}
                </main>
            </div> 
        )
    }
}
export default Layout


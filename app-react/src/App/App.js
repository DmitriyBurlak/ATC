import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Atc from './containers/Atc/Atc'

import './App.css'

class App extends Component {
    render() {
        return (
          <Layout>
            <Atc />
          </Layout>
        )
    }
}
export default App



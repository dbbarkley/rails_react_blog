import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from '../containers/Blog/Blog'
import About from '../containers/About/About'
import Contact from '../containers/Contact/Contact'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/" component={Blog} />
                </Switch>
            </div>
        )
    }
}

export default App
import React, {Component} from "react"
import {Switch, Route} from "react-router-dom"
import routes from "../routes"

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    {routes.map( ({path, exact, component: Component}) => (
                        <Route key={path} path={path} exact={exact} render= {(props) => {
                            return <Component {...props}/>
                        }} />
                    ))}
                </Switch>
            </>
        )
    }
}

export default App
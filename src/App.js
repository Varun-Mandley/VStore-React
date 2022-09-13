import React from 'react'
import Home from './Home';
import Product from './Product';
import Blogs from './Blogs';
import './All.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
const App = () => {
    return (
        <div>
            <div className="wrap-1">
                <div className="container">
                    <div className="row">
                        <h1 className='logo'>VStore</h1>
                        <Router>
                            <div className="Nav-Link">
                                <Link className="nav" to='/'>Home</Link>
                                <Link className="nav" to='/product'>Products</Link>
                                <Link className="nav" to='/blogs'>Blogs</Link>
                            </div>
                            <div className="margin-top" >
                            <Switch>
                                <Route path="/" component={Home} exact></Route>
                                <Route path="/product" component={Product}></Route>
                                <Route path="/ProductDetail/:fn" component={ProductDetail}></Route>
                                <Route path="/blogs" component={Blogs}></Route>
                            </Switch>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
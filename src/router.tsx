import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductList } from './views/ProductList';

export const MainRouter = () => {
    return (
       <Switch>
           <Route exact path="/">
                <Redirect to="/products"/>
           </Route>
           <Route exact path="/products" component={ProductList}/>
       </Switch>
    )
}

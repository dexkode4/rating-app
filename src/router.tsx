import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductList } from './views/ProductList';
import { Review } from './views/Review';

export const MainRouter = () => {
    return (
       <Switch>
           <Route exact path="/">
                <Redirect to="/products"/>
           </Route>
           <Route exact path="/products" component={ProductList}/>
           <Route exact path="/products/:id" component={Review}/>
       </Switch>
    )
}

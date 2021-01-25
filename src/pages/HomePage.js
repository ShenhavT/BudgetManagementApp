import React from 'react';
import Categories from '../components/Categories';
import NavbarBudget from '../components/NavbarBudget';


class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                this is home page
                <Categories/>
            </div>

        );}


}


export default HomePage;
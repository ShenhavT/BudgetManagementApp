import './App.css';
import React from 'react';
import NavbarBudget from './components/NavbarBudget';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import CategoryReport from './pages/CategoryReport';
import SpendingReport from './pages/SpendingReport';
import { Container } from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {  
         expensesList:[],
        //  activeUser: null,
        activeUser:{
          "id": 1,
          "fname": "Shenhav",
          "lname": "Top",
          "email": "shenhavtop@hotmail.com",
          "pwd": "123"
      }
    }
  }
  handleLogout = () => {
    this.setState({activeUser: null})
  }
  
  handelExpenseList = (objList) => {
    console.log('handelExpenseList');
    this.setState({expensesList:objList});
    // console.log(this.state.expensesList);
  }

  render(){
    return (
    <HashRouter>
      {/* <Route exact path="/"> */}
        <NavbarBudget handleLogout={this.handleLogout} activeUser={this.state.activeUser}/>
          {/* <HomePage  activeUser={this.state.activeUser} handleLogout={this.handleLogout}/> */}
        {/* </Route> */}
        <Container>
          <Switch>
            <Route exact path="/">
             <HomePage  activeUser={this.state.activeUser}  expensesList={this.handelExpenseList}/>
           </Route>
            <Route path='/categoryreport'>
              <CategoryReport/>
            </Route>
            <Route path='/spendingreport'>
             <SpendingReport expensesListToPie={this.state.expensesList}/>
            </Route>
          </Switch>
        </Container>
    </HashRouter>
    );
  }
}

export default App;

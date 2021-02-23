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
import expensesJson from './data/expenses.json';

class App extends React.Component{
  constructor(props){
    super(props);


    //conect to json file or to local Storage
    let allExpenses;
    if(localStorage.getItem('localExpenses')) {
        allExpenses = JSON.parse(localStorage.getItem('localExpenses'));
    }
    else{
        allExpenses = expensesJson;
    }



      this.state = {
        // expensesStorage: allExpenses,
         expensesList:allExpenses,
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
    // localStorage.setItem('localExpenses', JSON.stringify(
     

             //enter to local storage
            //  localStorage.setItem('localExpenses', JSON.stringify(this.state.expensesList.concat(objList)));
            console.log("objList",objList);
                    localStorage.setItem('localExpenses', JSON.stringify(
            this.state.expensesList.concat(objList)))


             this.setState({
              expensesList:this.state.expensesList.concat(
                  {
                  id:objList.id,
                  category:objList.category,
                  moreInformation:objList.moreInformation,
                  amount:objList.amount,
                  date:objList.date
                  })
          });
      
    // console.log(this.state.expensesList);
  }

  getAllExpenses=()=>{
    return this.state.expensesList;
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
             <HomePage  activeUser={this.state.activeUser}  handelexpensesList={this.handelExpenseList} expensesList={this.state.expensesList}/>
           </Route>
            <Route path='/categoryreport'>
            {/* expensesListAll={this.getAllExpenses} */}
              <CategoryReport expensesListToVertical={this.state.expensesList}/> 
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

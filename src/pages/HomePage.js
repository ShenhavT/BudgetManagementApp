import moment from 'moment';
import React from 'react';
import {Card} from 'react-bootstrap';
import Categories from '../components/Categories';
import ExpenseCard from '../components/ExpenseCard';

class HomePage extends React.Component{
    constructor(props){
        // localStorage.clear
        super(props);
        this.state = {
            detailsExpense:{id:'',category:'', moreInformation:'', amount:'', date:''},
            totalAmount:0,
            toSort:false
        }
    }
    addExpense=(objExpense)=>{
        console.log("at addExpense");
         this.setState({totalAmount:this.state.totalAmount+parseFloat(objExpense.amount)});
         //enter to local storage
         localStorage.setItem('localExpenses', JSON.stringify(this.props.expensesList));
        // localStorage.setItem('localExpenses', JSON.stringify(
        //     this.state.resultExpenseListCard.concat(objExpense)))
        this.props.handelexpensesList(objExpense);
    }
    componentDidMount(){
        let amountFromJsonAndLocalStorage = 0;
        this.props.expensesList.forEach(element => {
            amountFromJsonAndLocalStorage+=parseFloat(element.amount);
        });
        console.log(amountFromJsonAndLocalStorage);
        this.setState({totalAmount:amountFromJsonAndLocalStorage});
    }
    //from lower to higher
    sortByAmountExpence=()=>{
        const sorted = this.props.expensesList.sort((a, b) => ((a.amount)-(b.amount)) > 0 ? 1 : -1);
        this.forceUpdate();

    }
    sortByDateExpence=()=>{
        const sorted = this.props.expensesList.sort((a, b) => moment(a.date).diff(moment(b.date)) > 0 ? 1 : -1);
        this.forceUpdate();
    }
    render(){
        // ask if better to send as a object??
        const expenseCards = this.props.expensesList.map( (expense, index) => {
            return <ExpenseCard  key={index}
                                 id={expense.id}
                                 category={expense.category}
                                 moreInformation={expense.moreInformation}
                                 amount={expense.amount}
                                 date ={expense.date}
                                  />
        });

        return(
            <div>
                 {/*---THE FORM PAGE -- */}
                <Categories addExpense={this.addExpense} detailsExpense={this.detailsExpense}
                                                        sortByDateExpence={this.sortByDateExpence}
                                                        sortByAmountExpence={this.sortByAmountExpence}/>
                <div>
                        <Card border="danger" style={{background:"#D4C6BD", width: '18rem', "marginLeft": "auto"}}>
                                <Card.Title  className="text-center p-1">Total Amount: {this.state.totalAmount} ₪</Card.Title>
                        </Card>
                </div>
                
                {expenseCards}
            
            </div>
        );}
}

export default HomePage;
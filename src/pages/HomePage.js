import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import Categories from '../components/Categories';
import ExpenseCard from '../components/ExpenseCard';
import expensesJson from '../data/expenses.json';



class HomePage extends React.Component{
    constructor(props){
        // localStorage.clear
        let allExpenses;
        if(localStorage.getItem('localExpenses')) {
            allExpenses = JSON.parse(localStorage.getItem('localExpenses'));
        }
        else{
            allExpenses = expensesJson;
        }

        super(props);
        this.state = {
            resultExpenseListCard : allExpenses,
            detailsExpense:{id:'',category:'', moreInformation:'', amount:'', date:''},
            totalAmount:0,
            toSort:false
        }
    }
    addExpense=(objExpense)=>{
        console.log("at addExpense");
         this.setState({
             resultExpenseListCard:this.state.resultExpenseListCard.concat(
                 {
                 id:objExpense.id,
                 category:objExpense.category,
                 moreInformation:objExpense.moreInformation,
                 amount:objExpense.amount,
                 date:objExpense.date
                 })
         });
         //send to parent app 
         this.props.expensesList(this.state.resultExpenseListCard);
         this.setState({totalAmount:this.state.totalAmount+parseFloat(objExpense.amount)});
         //enter to local storage
         localStorage.setItem('localExpenses', JSON.stringify(
        this.state.resultExpenseListCard.concat(objExpense)))

    }
    componentDidMount(){
        let amountFromJsonAndLocalStorage = 0;
        this.state.resultExpenseListCard.forEach(element => {
            amountFromJsonAndLocalStorage+=parseFloat(element.amount);
        });
        console.log(amountFromJsonAndLocalStorage);
        this.setState({totalAmount:amountFromJsonAndLocalStorage});
        //send to parent app 
        this.props.expensesList(this.state.resultExpenseListCard);
    }
    sortByDateExpence=()=>{
        console.log('before',this.state.resultExpenseListCard)
        const sorted = this.state.resultExpenseListCard.sort((a, b) => moment(a.date).diff(moment(b.date)) > 0 ? 1 : -1);
        this.forceUpdate();
    }
    render(){
        // ask if better to send as a object??
        const expenseCards = this.state.resultExpenseListCard.map( (expense, index) => {
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
                this is home 
                 {/*---THE FORM PAGE -- */}
                <Categories addExpense={this.addExpense} detailsExpense={this.detailsExpense}
                                                        sortByDateExpence={this.sortByDateExpence}/>
                <div className="amount-box">
                        <Card border="danger">
                            <Card.Body>
                                <Card.Title>Total Amount:</Card.Title>
                                <Card.Text className="text-center">{this.state.totalAmount}</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                {expenseCards}
            </div>

        );}
}


export default HomePage;
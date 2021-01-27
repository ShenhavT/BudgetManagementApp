import React from 'react';
import { Card } from 'react-bootstrap';
import Categories from '../components/Categories';
import ExpenseCard from '../components/ExpenseCard';



class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultExpenseListCard : [],
            detailsExpense:{id:'',category:'', moreInformation:'', amount:'', date:''},
            totalAmount:0
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
         this.setState({totalAmount:this.state.totalAmount+parseFloat(objExpense.amount)});
          console.log(this.state.resultExpenseListCard);
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
                <Categories addExpense={this.addExpense} detailsExpense={this.detailsExpense}/>
                <div className="amount-box">
                        <Card border="danger" style={{ width: '12rem' }}>
                            <Card.Body>
                                <Card.Title>Total Amount:</Card.Title>
                                <Card.Text>{this.state.totalAmount}</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                {expenseCards}
            </div>

        );}


}


export default HomePage;
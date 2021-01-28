import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';


class ExpenseCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card className="mr-auto">
            <Card.Header>
                <Card.Title className="d-flex justify-content-between">
                    <span>Expense - {moment(this.props.date).format("DD/MM/YYYY")}</span>
                    <span className="text-center">X</span>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                Category:{this.props.category}
                Amount:{this.props.amount}
                <Card.Text>More Information: {''} {this.props.moreInformation}</Card.Text>
            </Card.Body>
            </Card>

        );}


}


export default ExpenseCard;
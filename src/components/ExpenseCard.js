import React from 'react';
import { Card } from 'react-bootstrap';


class ExpenseCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card className="mr-auto">
            <Card.Header>expense - {this.props.date}
            <span className="text-center">X</span>
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
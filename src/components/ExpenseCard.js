import React from 'react';
import { Card } from 'react-bootstrap';


class ExpenseCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
            <Card.Header>expense - {this.props.date}</Card.Header>
            <Card.Body>
                id:{this.props.id}
                Category:{this.props.category}
                Amount:{this.props.amount}
                <Card.Text>More Information: {''} {this.props.moreInformation}</Card.Text>
            </Card.Body>
            </Card>

        );}


}


export default ExpenseCard;
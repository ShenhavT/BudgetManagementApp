import moment from 'moment';
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import uuid from 'react-uuid';


class ExpenseCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props.id)
        return(
            <Accordion>
            <Card className="mr-auto">
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
                        <Card.Title className="d-flex justify-content-between">
                            <span>Expense - {moment(this.props.date).format("DD/MM/YYYY")}</span>
                            {/* <span className="text-center">X</span> */}
                            <span className="pr-4">{this.props.amount}₪</span>
                        </Card.Title>    
                    </Accordion.Toggle>
 
            <Accordion.Collapse eventKey={this.props.id}>
            <Card.Body>
                <Card.Text><span className="font-weight-bold">Category: </span>{this.props.category}</Card.Text>
                <Card.Text><span className="font-weight-bold">Amount:</span> {this.props.amount}</Card.Text>
                <Card.Text><span className="font-weight-bold">More Information: </span>{''} {this.props.moreInformation}</Card.Text>
            </Card.Body>
            </Accordion.Collapse>
            </Card>
            </Accordion>

        );}


}


export default ExpenseCard;
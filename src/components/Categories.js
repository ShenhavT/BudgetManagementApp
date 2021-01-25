import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import CategoriesJson from '../data/categories.json';

class Categories extends React.Component{
    constructor(props){
        super(props);
    }
    Categories = CategoriesJson;


    render(){
        //  console.log(CategoriesJson);
        const listOfCategories = this.Categories.map((category, index) =>{
            return(<option value={index} key={index}>{category.Automobile}</option>);

        var todayDate = new Date();
        console.log(todayDate);

        });
        return(
                <Form>
                    <h2>New Expense</h2>
                <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        
                        <Form.Label className="mr-sm-2">
                             Preference
                        </Form.Label>
                         <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                            <option value="0">Choose...</option>
                            {listOfCategories}
                        </Form.Control>

                        <Form.Label>More information</Form.Label>
                        <Form.Control type="text" name="moreInformation" placeholder="optional"/>
                        {/* onChange={handleChange} */}
                        
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" name="amount"/>

                        <Form.Label>Date</Form.Label>
                        <Form.Group>
                        {/* <DatePicker  id="example-datepicker"/> */}
                        <Form.Control type="date" defaultValue="2021-01-01"/>
                        </Form.Group>
                    </Col>
                    <Col  xs="auto" className="my-1"> 
                        <Button type="text">Add Expense</Button>
                    </Col>

                    
                </Form.Row>
                </Form>

        );}


}


export default Categories;
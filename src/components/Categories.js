import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import CategoriesJson from '../data/categories.json';
import uuid from 'react-uuid'

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            expenseList:[],
            categoryOption:'',
            moreInformation:'',
            amount: '',
            chossenDate:''        }
    }
    Categories = CategoriesJson;
    cleanState=()=>{
        this.setState({categoryOption:'', moreInformation:'',amount:'', 
                            chossenDate:this.state.date.toISOString().slice(0,10)});
    }
    HandelOnclick = () =>{
        // console.log('show status of state');
        // console.log(this.state.categoryOption);
        // console.log(this.state.moreInformation);
        // console.log(this.state.amount);
        // console.log(this.state.chossenDate);
        // debugger;
        const newObjExpense={
            id:uuid(),
            category: this.state.categoryOption,
            moreInformation: this.state.moreInformation,
            amount:this.state.amount,
            date:this.state.chossenDate
        }
        this.cleanState();
        this.props.addExpense(newObjExpense);
    }

    componentDidMount(){
        this.setState({ chossenDate:this.state.date.toISOString().slice(0,10)})
    }
    render(){
        //  console.log(CategoriesJson);
        const listOfCategories = this.Categories.map((category, index) =>{
            return(<option key={index} >
                {category.Automobile}</option>);
        });
        const strDate = this.state.date.toISOString().slice(0,10);
        return(
                <Form>
                    <h2>New Expense</h2>
                    <h4>{strDate}</h4>
                <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        
                        <Form.Label className="mr-sm-2">
                             Preference
                        </Form.Label>
                         <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom
                        value={this.state.categoryOption}
                          onChange={(event) => {this.setState({categoryOption: event.target.value})
                          console.log(event.target.value)}}>                    
                            <option value="0">Choose...</option>
                            {listOfCategories}
                        </Form.Control>

                        <Form.Label>More information</Form.Label>
                        
                        <Form.Control type="text" name="moreInformation" placeholder="Optional"
                        value={this.state.moreInformation}
                        onChange={(event) => {this.setState({moreInformation: event.target.value})}} />
                        {/* onChange={handleChange} */}
                        
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" name="amount" value={this.state.amount}
                         onChange={(event) => {this.setState({amount: event.target.value})}}/>

                        <Form.Label>Date</Form.Label>
                        <Form.Group>
                        {/* <DatePicker  id="example-datepicker"/> */}
                        {/* defaultValue={strDate}  */}
                        <Form.Control type="date" value={this.state.chossenDate}
                        onChange={(event) => {this.setState({chossenDate: event.target.value})}}/>
                        {/* <Form.Control type="date" defaultValue="2021-01-20"/> */}
                        </Form.Group>
                    </Col>
                    <Col  xs="auto" className="my-1"> 
                        <Button type="text" onClick={()=>{this.HandelOnclick()}}>Add Expense</Button>
                    </Col>

                    
                </Form.Row>
                </Form>

        );}
}


export default Categories;
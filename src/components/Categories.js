import React from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import CategoriesJson from '../data/categories.json';
import uuid from 'react-uuid'
import moment from 'moment';
import wallet from '../pictures/wallet.jpg';
import './categories.css';

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            validationCategoryShow :false,
            date: new Date(),
            expenseList:[],
            categoryOption:'',
            moreInformation:'',
            amount: 0,
            chossenDate:''
        }
    }
    
    Categories = CategoriesJson;
    cleanState=()=>{
        this.setState({categoryOption:'', moreInformation:'',amount:0, 
                            chossenDate:this.state.date.toISOString().slice(0,10)});
    }
    HandelOnclick = () =>{
        // console.log('show status of state');
        // console.log(this.state.categoryOption);
        // console.log(this.state.moreInformation);
        // console.log(this.state.amount);
        // console.log(this.state.chossenDate);
        // debugger;
        if  (this.state.categoryOption==="0" || this.state.categoryOption===''){
            console.log("Please choose category")
             this.setState({validationCategoryShow:true}); 
            return;
        }
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
    selectBoxOnExpense=(event)=>{
        if (event.target.value==="date"){
            this.sortByDate();
        }
        if(event.target.value==="amount"){
            this.sortByAmount();
        }
    }
    sortByAmount=()=>{
        this.props.sortByAmountExpence();
    }
    sortByDate =()=>{
        this.props.sortByDateExpence();
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
        const strDate = moment(this.state.date).format("DD/MM/YYYY");
        // const validationCategory = <Form.Label style={{color:"red"}}>please cooshe category</Form.Label>
        return(
                <Form>
                    <h2>New Expense</h2>
                    <h4>{strDate}</h4>
                <Form.Row className="align-items-center">
                    <Col className="my-1 border p-5">
                        
                        <Form.Label className="mr-sm-2">
                             Preference
                        </Form.Label>
                        {this.state.validationCategoryShow?<Form.Label style={{color:"red"}}>please cooshe category</Form.Label>:null}
                         <Form.Control as="select" className="mr-sm-2" custom
                        value={this.state.categoryOption}
                          onChange={(event) => {console.log(event.target.value); 
                                                this.setState({categoryOption: event.target.value, validationCategoryShow:false})}}>                    
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
                        <Form.Control type="date" value={this.state.chossenDate}
                        onChange={(event) => {this.setState({chossenDate: event.target.value})}}/>
                        </Form.Group>
                        <Button variant="outline-danger"
                         type="button" onClick={()=>{this.HandelOnclick()}}>Add Expense</Button>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Image src={wallet} style={{width:"300px"}} rounded />
                        <Button type="button" onClick={()=>{this.sortByDate()}}>Sory By Date</Button>

                        <Form.Control as="select" className="mr-sm-2"custom
                                onChange={this.selectBoxOnExpense}>
                                <option value="date">sort by Date</option>
                                <option value="amount">sort by Amout</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                               
                        </Form.Control>
                    </Col>
                    </Form.Row>
                </Form>

        );}
}


export default Categories;
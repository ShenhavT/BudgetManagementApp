import moment from 'moment';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CardReport from '../components/CardReport';
import PieChart from '../components/PieChart';

class SpendingReport extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
//{"bill":500,"rent":3200}
    categories = ()=>{
        const curentCardsList =this.props.expensesListToPie;
        const foundcategories = {};
    
        for (let i =0; i <curentCardsList.length; i++){
            const word = curentCardsList[i].category;
            if (foundcategories[word]){
                foundcategories[word] =foundcategories[word]+parseFloat(curentCardsList[i].amount);
            }
            else{
                foundcategories[word]=parseFloat(curentCardsList[i].amount);
            }
        }
        // console.log(foundcategories);
        return foundcategories;
    }

    //{"05-2021":{"rent":3200, "bill":1200}, "07-2021":{"rent":3200}}
    //dictoneryByMonths handekSelectBox

    colorChart= () =>{
        const colorScheme = [
            "#25CCF7","#FD7272","#54a0ff","#00d2d3",
            "#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e",
            "#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50",
            "#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6",
            "#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d",
            "#55efc4","#81ecec","#74b9ff","#a29bfe","#dfe6e9",
            "#00b894","#00cec9","#0984e3","#6c5ce7","#ffeaa7",
            "#fab1a0","#ff7675","#fd79a8","#fdcb6e","#e17055",
            "#d63031","#feca57","#5f27cd","#54a0ff","#01a3a4"
        ]
        return colorScheme;

    }


    handekSelectBox=(choseenDate)=>{
        const colorScheme = this.colorChart();
        const listOfMonths = this.dictoneryByMonths();
        const obj =listOfMonths[choseenDate.target.value];
        // console.log(obj);
        const data = {
            labels: Object.keys(obj),
            datasets: [{
                data:Object.keys(obj).map(key =>{ return (obj[key])}),
                backgroundColor:colorScheme,
             }]
        };
        this.setState({data:data});





    }
    dictoneryByMonths=()=>{
        const curentCardsList =this.props.expensesListToPie;
        const foundDate = {};
        const foundcategories = {};
        // console.log(curentCardsList);
        for (let i =0; i <curentCardsList.length; i++){
            const date = moment(curentCardsList[i].date).format("MM-YYYY");
            const category = curentCardsList[i].category;
            if (foundDate[date]){
                if(foundDate[date][category]){
                    foundDate[date][category]=foundDate[date][category]+parseFloat(curentCardsList[i].amount);
                }
                else{
                    foundDate[date][category] = curentCardsList[i].amount;
                }
            }
            else{
                 foundDate[date]={}
                //  foundDate[date][category]={}
                 foundDate[date][category] = parseFloat(curentCardsList[i].amount);
            }
        }
        // console.log(foundDate);
        return(foundDate);
    }
    componentDidMount(){
    //   //  const categories = this.categories();  
        // this.handekSelectBox();
        const colorScheme = this.colorChart();

        const categories = this.categories();  
        
        const data = {
            labels: Object.keys(categories),
            datasets: [{
                data:Object.keys(categories).map(key =>{ return (categories[key])}),
                backgroundColor:colorScheme,
             }]
        };
        this.setState({data:data});
     }
    render(){
        const listOfMonths = this.dictoneryByMonths();
        const listOfMonthsOption = Object.keys(listOfMonths).map((key, index) =>{
            return(<option key= {index} value={key}>
                {key}</option>);
        });

        // console.log(this.props.expensesListToPie) 

            // //const b= Object.keys(object1).map(key =>{
            //     return (object1[key])
            // }) 

        return(
                <Row>
                    <Col xs={8}>
                        <PieChart data={this.state.data}></PieChart>
                    </Col>
                    <Col>
                        SpendingReport-PAGE
                        <Form>
                                <Form.Control as="select" 
                                                onChange={this.handekSelectBox}>
                                                {listOfMonthsOption}
                                    </Form.Control>
                        </Form>
                        <CardReport  chartData ={this.state.data} dataLabels={this.state.data.labels} dataAmount={this.state.data.datasets} />
                   </Col>
                </Row>

        );}
}

export default SpendingReport;


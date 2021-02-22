import React from 'react';
import VerticalChart from '../components/VerticalChart';
import moment from 'moment';
import { Col, Form, Row } from 'react-bootstrap';
class CategoryReport extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:{}
        }
    }

    colorChart= () =>{
        const colorScheme = 
        // [
        //           'rgba(255, 99, 132, 0.2)',
        //           'rgba(54, 162, 235, 0.2)',
        //           'rgba(255, 206, 86, 0.2)',
        //           'rgba(75, 192, 192, 0.2)',
        //           'rgba(153, 102, 255, 0.2)',
        //           'rgba(255, 159, 64, 0.2)',
        //         ]


        // const colorScheme =
         [
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
    handekSelectBox=(choseenCategory)=>{
        if (choseenCategory.target.value ==="not-chossen"){
            return;
        }
        const colorScheme = this.colorChart();
        const listOfCategories = this.dictoneryByCategories();
        const obj =listOfCategories[choseenCategory.target.value];
         console.log(obj);
        const data = {
            labels: Object.keys(obj),
            datasets: [{
                data:Object.keys(obj).map(key =>{ return (obj[key])}),
                backgroundColor:colorScheme,
             }]
        };
        this.setState({data:data});
    }
    //will return list of all categories
    categories = ()=>{
        const curentCardsList =this.props.expensesListToVertical;
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

    dictoneryByCategories=()=>{
        const curentCardsList =this.props.expensesListToVertical;
        const foundcategories = {};
        for (let i =0; i <curentCardsList.length; i++){
            const date = moment(curentCardsList[i].date).format("MM-YYYY");
            const category = curentCardsList[i].category;
            if (foundcategories[category]){
                if(foundcategories[category][date]){
                    foundcategories[category][date]=foundcategories[category][date]+parseFloat(curentCardsList[i].amount);
                }
                else{
                    foundcategories[category][date] = parseFloat(curentCardsList[i].amount);
                }
            }
            else{
                foundcategories[category]={}
                console.log('1',foundcategories);
                foundcategories[category][date]={}
                foundcategories[category][date] = parseFloat(curentCardsList[i].amount);
            }
        }
        console.log(foundcategories);
        return(foundcategories);
    }

//     componentDidMount(){

//         const categories = this.categories(); 
//         const data = {
//             labels: Object.keys(categories),
//             datasets: [
//               {
//                 label: '# of Votes',
//                 data: Object.keys(categories).map(key =>{ return (categories[key])}),
//                 backgroundColor:this.colorChart(),
//             },
//         ],
//    }
//    this.setState({data:data});
// }

            //     backgroundColor: [
            //       'rgba(255, 99, 132, 0.2)',
            //       'rgba(54, 162, 235, 0.2)',
            //       'rgba(255, 206, 86, 0.2)',
            //       'rgba(75, 192, 192, 0.2)',
            //       'rgba(153, 102, 255, 0.2)',
            //       'rgba(255, 159, 64, 0.2)',
            //     ],
            //     borderColor: [
            //       'rgba(255, 99, 132, 1)',
            //       'rgba(54, 162, 235, 1)',
            //       'rgba(255, 206, 86, 1)',
            //       'rgba(75, 192, 192, 1)',
            //       'rgba(153, 102, 255, 1)',
            //       'rgba(255, 159, 64, 1)',
            //     ],
            //     borderWidth: 1,
        //        },
        //      ],
        // }
  
       



    render(){
        const listOfCategories = this.dictoneryByCategories();
        const listOfCategoriesOption = Object.keys(listOfCategories).map((key, index) =>{
            return(<option key= {index} value={key}>
                {key}</option>);
        });

        
        return(
            <Row>
                categoryReport-PAGE
                    <Col xs={8}>
                        <VerticalChart data={this.state.data}/>
                    </Col>
                    <Col>
                    categoryReport-PAGE
                        <Form>
                                <Form.Control as="select" 
                                                onChange={this.handekSelectBox}>
                                                    <option key= {0} value="not-chossen">choose categorey</option>
                                                {listOfCategoriesOption}
                                    </Form.Control>
                        </Form>
                        {/* <CardReport  chartData ={this.state.data} dataLabels={this.state.data.labels} dataAmount={this.state.data.datasets} /> */}
                   </Col>
            </Row>

        );}


}

export default CategoryReport;
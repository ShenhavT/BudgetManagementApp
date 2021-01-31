import React from 'react';
import { Card } from 'react-bootstrap';

class CardReport extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
      let listOfCategories = [];
      let totalAmount = 0;
      if ((this.props.dataLabels!= undefined)||(this.props.dataAmount!=undefined)) {
         listOfCategories = this.props.dataLabels.map((item, index) =>{
           totalAmount +=parseFloat(this.props.dataAmount[0].data[index]);
          return(  <Card.Text key= {index}>
                {item} : {this.props.dataAmount[0].data[index]} ₪
          </Card.Text>);
      });
    }
    else{
     listOfCategories=<Card.Text>nothing to show</Card.Text>
    }

    // console.log('labels',this.props.dataLabels)
    // if (this.props.dataAmount!==undefined){
    //     console.log(this.props.dataAmount[0].data)
    // }
        
        // const showDeatils =this.showCategories();
        return(
            // style={{ width: '18rem' }}
            <Card border>
            <Card.Header>Total Amount: {totalAmount} ₪</Card.Header>
            <Card.Body>
                {/* <div> {this.props.data.labels[0]}</div> */}
              <Card.Title>Secondary Card Title</Card.Title>
              {listOfCategories}
              <Card.Text>
             {/* {showCategories} */}
             {/* <Card.Text>dfgdgdghdh</Card.Text> */}
              </Card.Text>
            </Card.Body>
          </Card>
            
    );}
}
export default CardReport;
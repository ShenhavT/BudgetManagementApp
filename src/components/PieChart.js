
import React from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Pie data={this.props.data}/>
    }
}
export default PieChart;
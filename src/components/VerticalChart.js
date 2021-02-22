import React from 'react';
import { Bar} from 'react-chartjs-2';  

class VerticalChart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<Bar data={this.props.data} />);
    }
}
export default VerticalChart;
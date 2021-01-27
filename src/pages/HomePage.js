import React from 'react';
import Categories from '../components/Categories';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultExpenseListCard : [],
            detailsExpense:{id:null,category:null, moreInformation:null, amount:null, date:null}
        }
    }

    addExpense=(objExpense)=>{
        console.log("at addExpense");
        // const newExpense={id:"2", category:"somtingcategory", moreInformation:"moreinformation",amount:"450", date:"somedate"};
        // {id:2, category:"somtingcategory", moreInformation:"moreinformation",amount:"450", date:"somedate"}
        //  debugger;
         this.setState({
             resultExpenseListCard:this.state.resultExpenseListCard.concat(
                 {
                 id:objExpense.id,
                 category:objExpense.category,
                 moreInformation:objExpense.moreInformation,
                 amount:objExpense.amount,
                 date:objExpense.date
                 })
         });
          console.log(this.state.resultExpenseListCard);
    }

    render(){
        // const MovieCards = this.state.selectedMovies.map( (movie, index) => {
        //     return <MovieCard  key={index} movieName={movie.name} movieId={movie.id}
        //                        moviePoster={movie.posterP} />
        return(
            <div>
                this is home 
                 {/*---THE FORM PAGE -- */}
                <Categories addExpense={this.addExpense} detailsExpense={this.detailsExpense}/>
            </div>

        );}


}


export default HomePage;
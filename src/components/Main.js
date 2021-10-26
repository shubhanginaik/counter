import { Component } from "react";


class Main extends Component {
    state={
         count: 0,
         backgroundColor:'yellow',
         
    }
    
    
    increment= () =>{
        this.setState({count:this.state.count+1});
    }

    decrement = () =>{
        if(this.state.count>0){
        this.setState({count:this.state.count-1});
    }
}

    incrementFive= () =>{
        this.setState({count:this.state.count+5});
    }
    
    decrementFive = ()=>{
        if(this.state.count>4){
            this.setState({count:this.state.count-5});
        }
    }
    
    
    resetcounter = () =>{
        this.setState({count:0})
    }
    
        render (){
            let circleClass = "";
            this.state.count===0
               ? (circleClass = "circle")
               : this.state.count % 2 ===0
               ? (circleClass = "even")
               : (circleClass = "odd");
           
      return(
      <main>
        <div>
                <div><h1 className={circleClass} >{this.state.count}</h1></div>
                <button  onClick={this.increment} className="counter">Add one</button>
                <button  onClick={this.decrement} className="counter">Remove one</button>
                <button  onClick={this.incrementFive} className="counter">Add five</button>
                <button  onClick={this.decrementFive} className="counter">Remove five</button>
                <button  onClick={this.resetcounter} className="counter">Reset</button>
          </div>
        </main>
      );
    }
    };
    export default Main;
import { Component } from "react";

class Main extends Component {
    state={
         count: 0,
         ElementStyle1: {backgroundColor:'green'},
         ElementStyle2:{backgroundColor:'blue'}
    }
    
    increment= () =>{
        this.setState({count:this.state.count+1});
    }
    decrement = () =>{
        this.setState({count:this.state.count-1});
    }
    resetcounter = () =>{
        this.setState({count:0})
    }
    addClass = () =>{
        let btn = document.getElementsByClassName('btnShow');
        if(this.state.count/2 !==0 ){
            btn.backgroundColor=this.state.ElementStyle1.backgroundColor;
        }
        else {
            btn.backgroundColor=this.state.ElementStyle2.backgroundColor;
        }
    }
        render (){
      return(
      <main>
        <div>
                <div><button onChange={this.addClass} className="btnShow">{this.state.count}</button></div>
                <button  onClick={this.increment} className="counter">Add one</button>
                <button  onClick={this.decrement} className="counter">Remove one</button>
                <button  onClick={this.resetcounter} className="counter">Reset</button>
          </div>
        </main>
      );
    }
    };
    export default Main;
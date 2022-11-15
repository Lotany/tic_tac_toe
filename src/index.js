import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

class Board extends React.Component {

    //constructor
    constructor (props){
        super(props);
        this.state = {Squares: Array(9).fill(null), };
    }


    //render function
    renderSquare(i){
        return(<Square value={this.state.Squares[i]}
        onClick={()=> 
            this.handleClick(i)} />
        );
    }
}

class Square extends React.Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {value: null,};
    }

    //render function outputs
    render() {
        return(<button 
        className="square" 
        onClick={()=> 
        this.setState({value: 'X'})}>
            {this.state.value}
        </button>);
    }
}





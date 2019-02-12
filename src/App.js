import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      turn:"O",
      board:Array(9).fill(""),
      gamecontinue: true,
      gamestatus:"",
      moves:1,
      replay:"hidden"
    }
  }

  clicked(e)
  {
    if(e.target.innerText=="" && this.state.gamecontinue){
    this.setState({moves:this.state.moves+1})
    e.target.innerText = this.state.turn
    this.state.board[e.target.dataset.payload]=this.state.turn
    //console.log(this.state.board)
    //console.log(e.target.dataset.payload)
     if (this.state.turn==="O")
     this.setState({turn:"X"})
     else
     this.setState({turn:"O"})
     //setTimeout(()=>console.log(this.state.turn),1000)
    } 
    
    var result=this.checkgame()
    if(result=="X"){
    
    this.setState({gamecontinue:false, gamestatus:"X",replay:"visible"})  
    setTimeout(()=>alert("GAME OVER AND WINNER IS PLAYER X"),1000)
  }
    if(result=="O")
    {
    
    this.setState({gamecontinue:false, gamestatus:"O",replay:"visible"})
    setTimeout(()=>alert("GAME OVER AND WINNER IS PLAYER O"),1000)
    }
     // console.log(this.state.moves)
    if(this.state.moves==9){
    this.setState({gamestatus:"Draw",replay:"visible"})
    setTimeout(()=>alert("GAME OVER AND RESULT IS DRAW"),1000)
    }

  }

  checkgame()
  {
    var board=this.state.board;
    var winpattern=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
    for(var i=0;i<winpattern.length;i++)
    {
        if(board[winpattern[i][0]]==board[winpattern[i][1]] && board[winpattern[i][1]]==board[winpattern[i][2]])
        {
            return(board[winpattern[i][0]])
        }
    }
  }
  replay()
  {
    for(var i=0; i<9; i++)
    {
      var elem = document.getElementById(i)
      elem.innerText="";
    }
    this.setState({turn:"O",
    board:Array(9).fill(""),
    gamecontinue: true,
    gamestatus:"",
    moves:1,
    replay:"hidden"})
  }
  
  render() {
    return (
      <div className="App">
        <div className="Board">
          <div className="cell" onClick={(e)=>this.clicked(e)} data-payload="0" id="0">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)} data-payload="1" id="1">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)} data-payload="2" id="2">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)}data-payload="3" id="3">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)} data-payload="4"id="4">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)}data-payload="5" id="5">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)} data-payload="6" id="6">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)}data-payload="7" id="7">
          </div>
          <div className="cell" onClick={(e)=>this.clicked(e)}data-payload="8" id="8">
          </div>
          <h1>{`TURN : PLAYER ${this.state.turn}`}</h1>
          <h1>{`RESULT : ${this.state.gamestatus}`}</h1>
          <button style={{visibility:this.state.replay}} onClick={()=>this.replay()}>REPLAY </button>
        </div>
      </div>
    );
  }
}

export default App;

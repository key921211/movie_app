import React from 'react';


class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
     count: 0
  };
  add = () => {
    //this.setState({ count: this.state.count + 1 })); //좋지 않은방법
    this.setState( current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState( current => ({ count: current.count - 1 }));
  }; 
  componentDidMount() { //component render 처음 호출 됐을 때
    console.log("component rendered");
  }
  componentDidUpdate() { //component render update 됐을 때 
    console.log("component updating");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
   render(){
     console.log("I'm rendring");
     return (
     <div>
       <h1>The number is : {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
    </div>
     )
   }
}

export default App;

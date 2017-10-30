
//class component
class Button extends React.Component{
//initialize state object in button constructor class

	handleClick=()=>{
	// if you update state based on current state then use 2nd syntax of set state
		this.props.onClickFunction(this.props.incrementValue)
	};
	render(){
  	return(
    <button onClick={this.handleClick}>
    +{this.props.incrementValue}
    </button>
    );
  }
}


const Result=(props)=>{
	return(
  	<div>{props.counter}</div>
  ); 
};

class App extends React.Component{
	state={counter:0}
  
  incrementCounter=(incrementValue)=>{
   this.setState((prevState)=>({
	counter:prevState.counter+incrementValue
	}));
  };
  
	render(){
		return(
    		<div>
        	<Button incrementValue={1} onClickFunction={this.incrementCounter} />
          	<Button incrementValue={2} onClickFunction={this.incrementCounter} />
            	<Button incrementValue={4} onClickFunction={this.incrementCounter} />
              	<Button incrementValue={8} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter}/>
        </div>
    );
	}
}


ReactDOM.render(<App/>,mountNode);

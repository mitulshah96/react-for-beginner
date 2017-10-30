//example of function component and function component cannot have state
//component properties are always immutable
const Button=function(props){
	return(
  //props is an object that hold all the value that were passed when component was rendered
		<button>{props.label}</button>
  //React compile jsx into pure javascript using
	//React.createElement("button","null","GO")
	)	;
}

//so lets upgrade this component to class component
//class component
//class component
class Button extends React.Component{
//initialize state object in button constructor class
	state={counter:0}
	handleClick=()=>{
  // if you update state based on current state then use 2nd syntax of set state
  	this.setState((prevState)=>({
    counter:prevState.counter+1
    }));
  };
	render(){
  	return(
    <button onClick={this.handleClick}>
    {this.state.counter}
    </button>
    );
  }
}



ReactDOM.render(<Button label="save"/>,mountNode);

const Button=function(props){
	return(
  //props is an object that hold all the value that were passed when component was rendered
		<button>{props.label}</button>
  //React compile jsx into pure javascript using
	//React.createElement("button","null","GO")
	)	;
}

ReactDOM.render(<Button label="save"/>,mountNode);

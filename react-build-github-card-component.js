const Card=(props)=>{
	return(
  <div style={{margin:'1em'}}>
 	 <img width="75" src={props.avatar_url}/>
 		 <div style={{display:'inline-block',marginLeft:10}}>
     		<div style={{fontSIze:'1.25em',fontWeight:'bold'}}>{props.name}</div>
 		 		<div>{props.company}</div>
     </div>
 </div> 
  );
};

let data=[
	{	name:"Mitul Shah",
  	avatar_url:"https://avatars2.githubusercontent.com/u/29948589?v=4",
		company:"Accionlabs"
	},
  {	name:"Manoj Shah",
  	avatar_url:"https://avatars2.githubusercontent.com/u/29948589?v=4",
		company:"Accionlabs"
  },
];

const CardList=(props)=>{
	return(
		<div>
    {props.cards.map(card=><Card {...card}/>)}
    </div>
	);
};

ReactDOM.render(<CardList cards={data}/>,mountNode);

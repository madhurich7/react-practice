import React from 'react';

class App extends React.Component{
	constructor(props){
		super();
		this.state = {
			msg: "defining the state fro app component",
			name: props.name
		};
		this.update = this.update.bind(this);
		
	}
	update(event){
		this.setState({msg: event.target.value});
	}
	changeName(event){
		alert("changeName");
		this.setState({name: "xyz"});
		/*this.name = "xyz"
		console.log(this.name)
		use this code to check that state is not changed, the console statement
		gives "xyz" but it will not be displayed on the view if the initial state is not defined*/
	}

	/*getDefaultProps(){
		return {
			name: "default name here",
			nationality: "indian"
		};
	}*/

	render(){
		return (
				<div>
					<p onClick ={this.changeName.bind(this)}>{this.state.name}</p>
					<p>{this.props.age}</p>
					<input onChange={this.update}/>
					<p>{this.state.msg}</p>
					
					<br/>
					
				</div>
			);	
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	age: React.PropTypes.number.isRequired
}

App.defaultProps = {
	age: 54
}

export default App;



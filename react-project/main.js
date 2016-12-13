import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Country from './Country';


class Main extends React.Component{
	render(){
		return (
			<div>
				<App name="madhuri"/>
				<Country name="India" population={200000} nationality="passed by parent"/>
			</div>
			
			) 				
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));
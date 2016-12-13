import React from 'react';

let Country = React.createClass({
	getDefaultProps: function(){
		return {
			nationality: 'indian'
		};
	},

	propTypes: {
		name: React.PropTypes.string.isRequired,
		population: React.PropTypes.number,
		nationality: React.PropTypes.string.isRequired
	},

	render: function(){
		return(
				<div>
					<h2>{this.props.name}</h2>
					<ul>
						<li>Nationality: {this.props.nationality}</li>
						<li>Population: {this.props.population}</li>
					</ul>
				</div>
			)
	}
});

export default Country;
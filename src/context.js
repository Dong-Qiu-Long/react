import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './createContext'

export default class context extends Component {

	static defaultProps = {
		type:"text"
	}

	static propTypes = {
		name:PropTypes.string.isRequired,
		type:PropTypes.string.isRequired
	}
	static contextType = ctx;

	render() {
		return (
			<>
				<input type={this.props.type}  value={this.context.fromDate[this.props.name] || ""} onChange={(e)=>{
					this.context.changeFormData(this.props.name,e.target.value)
				}}  />
			</>
		)
	}
}

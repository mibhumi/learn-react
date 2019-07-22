import React, { Component } from 'react';
import { connect }from 'react-redux';
import Calculator from '../../components/Calculator/Calculator';
import Output from '../../components/Calculator/Output';

class Calculation extends Component {
    state = {
	counter: 0
    }

    render () {
	return (
	    <div>
		<output/>
		<Calculator label="1" clicked={this.props.ctr} />
		<Calculator label="2" clicked={()=>alert('hello')} />
		<Calculator label="3" clicked={()=>alert('hello')} />
		<Calculator label="4" clicked={()=>alert('hello')} />
		<Calculator label="5" clicked={()=>alert('hello')} />
		<Calculator label="6" clicked={()=>alert('hello')} />
		<Calculator label="7" clicked={()=>alert('hello')} />
		<Calculator label="8" clicked={()=>alert('hello')} />
		<Calculator label="9" clicked={()=>alert('hello')} />
		<Calculator label="0" clicked={()=>alert('hello')} />
		<Calculator label="+" clicked={()=>alert('hello')} />
		<Calculator label="-" clicked={()=>alert('hello')} />
		<Calculator label="/" clicked={()=>alert('hello')} />
		<Calculator label="*" clicked={()=>alert('hello')} />
	    </div>
	);
    }
}

const mapStateToProps = state => {
    return {
	ctr: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
	onIncCounter: () => dispatch({type: 'INCREMENT'}),
	onDecCounter: () => dispatch({type: 'DECREMENT'}),
	onAddCounter: () => dispatch({type: 'ADD1', value: 5}),
	onSubCounter: () => dispatch({type: 'SUB1', value: 5}),
    };
};

export default Calculation;
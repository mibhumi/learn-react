import React, { Component } from 'react';
import { connect }from 'react-redux';

import CounterControl from '../../Component/CounterControl/CounterControl';
import CounterOutput from '../../Component/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
	return (
	    <div>
		<CounterOutput value={this.props.ctr} />
		<CounterControl label="Increment" clicked={this.props.onIncCounter} />
		<CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
		<CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
		<CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
	    </div>
	);
    }
}

const mapStateToProps = state => {
    return {
	ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
	onIncCounter: () => dispatch({type: 'INCREMENT'}),
	onDecCounter: () => dispatch({type: 'DECREMENT'}),
	onAddCounter: () => dispatch({type: 'ADD', value: 5}),
	onSubCounter: () => dispatch({type: 'SUB', value: 5}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
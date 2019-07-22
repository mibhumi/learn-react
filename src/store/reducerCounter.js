const initState = {
    counter: 0,
    operator: '=',
    result: 0
}

const reducerCounter = (state = initState, action) => {

    switch (action.type) {
	case 'INCREMENT':
	    return {
		counter: state.counter + 1
	    }

	case 'DECREMENT':
	    return {
		counter: state.counter - 1
	    }

	case 'ADD':
	    return {
		counter: state.counter + action.value
	    }

	case 'SUB':
	    return {
		counter: state.counter - action.value
	    }
    }

    return state;
}

export default reducerCounter;

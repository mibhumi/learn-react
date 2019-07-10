import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        toggleMe: false
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    nameChangedHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Maxican', age: 88 },
              { name: event.target.value, age: 29 },
              { name: 'Stephanie', age: 27 }
          ]
      });
    };

    toggleData = () => {
        const isShown = this.state.toggleMe;
        this.setState({ toggleMe: !isShown });
    }

    render() {

        let person = null;

        if( this.state.toggleMe ) {
            person = (
                <div>
                    {
                        this.state.persons.map( person => {
                            return <Person
                                name={person.name}
                                age={person.age}
                            />
                            }
                        )
                    }
                </div>
            )
        }

        return (
            <div className="Person">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler.bind(this, 'Hello')}>Switch Name</button>
                <button onClick={this.toggleData}>Toggle me</button>
                { person }
            </div>
        );
    }
}

export default App;

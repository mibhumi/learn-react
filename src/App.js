import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// functional component
// const App = props => {
//
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stephanie', age: 26 }
//         ]
//     });
//
//     const [otherState, setOtherState] = useState({
//         otherState: 'some other value'
//     });
//
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'Maximilian', age: 29 },
//                 { name: 'Manu', age: 29 },
//                 { name: 'Stephanie', age: 29 }
//             ]
//         });
//     };
//
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button onClick={ switchNameHandler }>Change state</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//             />
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}
//             >
//                 My Hobbies: Racing
//             </Person>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[2].age}
//             />
//         </div>
//     );
// }



// class based example

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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={ this.switchNameHandler.bind(this, '!!!Bhumi!!!') }
                        // Not recommand this
                        // click={ ()=>  this.switchNameHandler('Bhumi') }
                        changed = { this.nameChangedHandler }
                    >
                        My Hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
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



// default

// function App() {
//   return (
//       <div className="App">
//         <h1>Hello World!</h1>
//         <h2>This is working</h2>
//         <Person name="Bhumi" age="22" />
//         <person name="Om" age="16">Children</person>
//       </div>
//   );
// }

export default App;

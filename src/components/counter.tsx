import * as React from 'react';
import { Component } from 'react';

// interface CounterProps{

// }


// interface CounterState{

// }

// Component<any,any> : 1st type is for props & 2nd is for state.
// instead of any we can also give interface >> Component<CounterProps,CounterState>

class Counter extends Component<any,any> {
    state = {
        // here we can declare properties like variables that we are using in this component.
        // count: 0
        count: this.props.counter.value
    };
    // also here we can declare properties like variables that we are using in this component.
    
    // one other way of apply style
    badgeStyle = {
        fontSize: 12,
        fontWeight: "bold"
    };

    tags = ["tag1","tag2","tag3"];

    render() {
        return (
            <div className='counterComponent p-4'>
                <div className='container'>
                    {/* <h1>Hello world</h1> */}
                    {/* inside {} you can write any valid js expression which have/return value */}
                    
                    {/* <span style={{ fontSize:20 }} className='me-3 badge bg-primary'>{this.formatCount()}</span> */}
                    
                    <span style={this.badgeStyle} className={`me-3 badge ${this.state.count === 0 ? 'bg-warning' : 'bg-primary'}`}>{this.formatCount()}</span>
                    
                    {/* event handling , we just need to pass function refrence not need to call function */}
                    <button onClick={this.incrementCount} className='btn btn-secondary btn-sm'>Increment</button>
                
                    {/* raise(call) & handling the method(events) of parent component by props */}
                    <button onClick={() => this.props.onDeleteCounter(this.props.counter.id)} className='btn btn-danger btn-sm ms-2'>Delete</button>

                    {/* display array : key field is required to uniquely identify elements of array at time when react looking for what changes has been done in virtual DOM */}
                    {/* if we have obj as element then we can give any unique value key from obj like key={tag.id} */}
                    {/* <ul>{ this.tags.map(tag => <li key={tag}>{tag}</li>) }</ul> */}
                    
                    {/* conditionally render with Logical AND operand */}
                    {/* <p>{this.tags.length === 0 && "No Tags Found!"}</p> */}

                    {/* pass argument to event handler function */}
                    {/* <button onClick={() => this.displayDetails({id:1})}>Pass Argument</button> */}
                </div>
            </div>
        );
    }

    formatCount(){
        // also you can return jsx/tsx format.
        // return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    // increment count
    incrementCount = () => {
        // by doing this you can see in console count is incremented but not displaying updated count in view.
        // becuase react doesn't updating DOM as its not automatically detects changes.
        // this.state.count++;

        // so we need to use setState() method of it to detect changes in DOM.
        this.setState({ count: this.state.count + 1 });
        console.log('increment called', this.state.count);
    }

    displayDetails = (detail:object) => {
        console.log(detail);
    }
}
 
export default Counter;
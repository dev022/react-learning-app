import * as React from 'react';
import { Component } from 'react';
import FinalCounter from './finalCounter';

// interface FinalCounterListProps {
    
// }
 
// interface FinalCounterListState {
    
// }

interface singleCounter {
    id:number;
    value:number;
};
 
class FinalCounterList extends Component<any, any> {
    constructor(props:any){
        super(props);
        console.log("CounterList - constructor");
    }

    componentDidMount(){
        console.log("CounterList - mounted");
    }

    state = {
        // this counters are private property of this component, so its can't accessible outside it.
        // now we need to delete it based on delete btn clicked from counter component.
        // for that concept of raising and handling event by props is used. 
        counters:[
            { id:1, value:0 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:4 }
        ]
    };
    render() { 
        console.log("CounterList - Rendered");
        return ( 
            <div>
                {this.state.counters.map(counter => (
                    // attribute passed from here we will get in Counter component as props (this.props)
                    // instead of passing single values let's pass whole one object.    
                    // <Counter 
                    //     key={counter.id}
                    //     onDeleteCounter={this.deleteCounter}
                    //     countValue={counter.value}
                    //     id={counter.id} 
                    // />
                    <FinalCounter 
                        key={counter.id}
                        onIncrementCount={this.incrementCount}
                        onDeleteCounter={this.deleteCounter}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }

    incrementCount = (counter: singleCounter) => {
        console.log(counter);
        const counters = this.state.counters;
        counters[counters.indexOf(counter)].value++;

        this.setState({ counters });
    }

    deleteCounter = (counterId:number) => {
        console.log('delete counter worked', counterId);
        const updatedCountersArr = this.state.counters.filter(counter => counter.id !== counterId);
        // this will set the var 'counters', if already exist then overwrites it. here its overwrites. 
        this.setState({ counters: updatedCountersArr });
    }
}
 
export default FinalCounterList;
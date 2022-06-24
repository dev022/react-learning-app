import * as React from 'react';
import { Component } from 'react';

// interface FinalCounterProps {
    
// }
 
// interface FinalCounterState {
    
// }

class FinalCounter extends Component<any, any> {
    constructor(props:any){
        super(props);
        console.log("FinalCounter - constructor");
    }

    componentDidMount(){
        console.log("FinalCounter - mounted");
    }

    componentDidUpdate(prevProps, prevState){
        console.log('previous props',prevProps);
        console.log('previous state',prevState);
    }

    // when component is removed from DOM. (when click on delete button from counterList the component will be deleted & this hook will get called)
    componentWillUnmount(){
       console.log('finalCounter - unmount'); 
    }

    // without local state component , all things are managed by props.
    state = {};
    render() { 
        console.log("FinalCounter - rendered");
        return ( 
            <div className='counterComponent p-4'>
                <div className='container'>
                    <span className={`counterBadge me-3 badge ${this.props.counter.value === 0 ? 'bg-warning' : 'bg-primary'}`}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrementCount(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                    <button onClick={() => this.props.onDeleteCounter(this.props.counter.id)} className='btn btn-danger btn-sm ms-2'>Delete</button>
                </div>
            </div>
        );
    }

    formatCount(){
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }
}
 
export default FinalCounter;
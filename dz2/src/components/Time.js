import React from 'react';

class Timer extends React.Component{
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
    }
    upDateTime = () =>{
        this.setState({
            time: new Date()
        })
    }
    intervalid = setInterval(this.upDateTime,1000)

    render() {
        return(
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Timer;
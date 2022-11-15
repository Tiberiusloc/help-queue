import React from "react";
import NewTicketForm from "./NewTicketForm";

class DebugSteps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      debugStepNum: 1
    };
  }
  
  handleClick = () => {
    console.log(this.state.debugStepNum)
      if (this.state.debugStepNum < 4) {
        this.setState (prevState => ({
        debugStepNum: prevState.debugStepNum + 1
        }));
      } else {
        this.setState(prevState => ({
        debugStepNum: 1
        }));
      }
    }
  
  
    render(){
      let currentlyVisibleState = null;
      if (this.state.debugStepNum === 1) {
        currentlyVisibleState = <h3>Have you gone through all the steps on the Learn How to Program debugging lesson?</h3>
      } else if (this.state.debugStepNum === 2) {
        currentlyVisibleState = <h3>Have you asked another pair for help?</h3>
      } else if (this.state.debugStepNum === 3) {
        currentlyVisibleState = <h3>Have you spent 15 minutes going through through the problem documenting every step??</h3>
      } else {
        currentlyVisibleState = <NewTicketForm />
      }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>Next Step</button>
      </React.Fragment>
    );
  }
}
export default DebugSteps;
import React from 'react';
import PositiveMessage from './Components/PositiveMessage';
import NegativeMessage from './Components/NegativeMessage';


class CheckboxAgeConfirmation extends React.Component {

  state = {
    isConfirmed: false
  }


  handleCheckboxChanged() {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NegativeMessage />
    }
  }




  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1> Buy a ticket for the movie horror of the year!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChanged.bind(this)}
          checked={this.state.isConfirmed}
        />

        <label htmlFor="age"> I am at least 16 years old</label>
        {this.displayMessage()}


      </>
    )
  }
}




export default CheckboxAgeConfirmation;
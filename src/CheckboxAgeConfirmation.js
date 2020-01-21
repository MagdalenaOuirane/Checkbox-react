import React from 'react';
import PositiveMessage from './Components/PositiveMessage';
import NegativeMessage from './Components/NegativeMessage';


class CheckboxAgeConfirmation extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }


  handleCheckboxChanged() {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Its working');
    this.setState({
      isFormSubmitted: !this.state.isFormSubmitted,
    })
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {


      if (this.state.isConfirmed) {
        return <PositiveMessage />
      } else {
        return <NegativeMessage />
      }
    } else { return null }
  }



  render() {
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1> Buy a ticket for the movie horror of the year!</h1>

        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChanged.bind(this)}
            checked={this.state.isConfirmed}
          />

          <label htmlFor="age"> I am at least 16 years old</label>
          <br />
          <br />
          <button type="submit">Buy a ticket</button>
        </form>
        {this.displayMessage()}


      </>
    )
  }
}




export default CheckboxAgeConfirmation;
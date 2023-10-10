import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Btn, Cont, FormSt, Inp } from './form.styled';

const INITIAL_STATE = { name: '', number: '' };

class Form extends Component {
  state = { ...INITIAL_STATE };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: [value],
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      ...this.state,
    };
    this.props.onSubmitForm(newContact); //виклик методу з App
    this.resetForm();
  };
  resetForm = () => {
    //скидання інпутів
    this.setState({
      ...INITIAL_STATE,
    });
  };
  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
              required
            />
            <label htmlFor="tel">Number</label>
            <input
              type="tel"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
              // pattern="[a-zA-Z0-9]+"
              pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
              required
            />
            <button type="submit">Add contact</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Form;

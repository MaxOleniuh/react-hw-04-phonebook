import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormStyled,
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from './Form.styled';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange =  e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  }
  
handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  this.props.addContact(this.state.name, this.state.number);
  form.reset();
};
  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <LabelStyled>
          <span>Name</span>
          <InputStyled
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelStyled>
        <LabelStyled>
          <span>Number</span>
          <InputStyled
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default Form;

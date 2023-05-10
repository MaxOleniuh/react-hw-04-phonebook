import PropTypes from 'prop-types';
import {
  FormStyled,
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from './Form.styled';
const Form = (props) => {
  const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  props.addContact(form.name.value, form.number.value);
  form.reset();
};
    return (
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          <span>Name</span>
          <InputStyled
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
Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default Form;
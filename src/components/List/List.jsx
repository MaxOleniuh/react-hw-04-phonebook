import PropTypes from 'prop-types';
import { UlStyled, ButtonStyled, LiStyled } from './List.styled';
const List = ({ contacts, handleDelete }) => {
  return (
    <UlStyled>
      {contacts.map(({ id, number, name }) => (
        <LiStyled key={id}>
          {name}: {number}
          <ButtonStyled onClick={() => handleDelete(id)}>Delete</ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
  );
};
List.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default List;

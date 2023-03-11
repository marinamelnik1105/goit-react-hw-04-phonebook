import PropTypes from 'prop-types';
export const Filter = ({ FilterValue, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={FilterValue} onChange={onChange} />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  FilterValue: PropTypes.string.isRequired,
};

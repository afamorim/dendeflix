import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from './styles';

function FormField({ label, type, name, value, onChange }) {
  const field_id = `id_${name}`;

  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={field_id}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;

import P from 'prop-types';
import * as Styled from './styles';

export const SelectInput = ({ name, options, value, onChange }) => {
    return (
        <Styled.Container>
            <label>{name}</label>
            <select value={value} onChange={onChange} name={name}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </Styled.Container>
    );
};

SelectInput.propTypes = {
    name: P.string.isRequired,
    options: P.arrayOf(P.string).isRequired,
    value: P.string.isRequired,
    onChange: P.func.isRequired,
};

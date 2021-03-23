import { useState } from 'react';

const FirstComponent = ({ displayText }) => {
    const [value, setValue] = useState('fasdfasd');
    const onChangeHandle = (e) => {
        setValue(e.target.value);
    };
    return (
        <div>
            <h2>{displayText}</h2>
            <input type="text" onChange={onChangeHandle} value={value} />
            <p>wpisales: {value}</p>
        </div>
    );
};

export default FirstComponent;

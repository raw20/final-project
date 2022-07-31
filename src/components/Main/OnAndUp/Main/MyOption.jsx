import React from 'react';
import { Link } from 'react-router-dom';

import { components } from 'react-select';

const { Option } = components;

function MyOption({ children,...props }) {
    const { value, address } = props.data;
    return (
        <Link to={`../${address}/${value}`}>
            <Option {...props}>
                {children}
            </Option>
        </Link>
    );
}

export default MyOption;
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        const { children } = this.props;
        return (
            <button>{children}</button>
        );
    }
}

export default Button;
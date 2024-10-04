import React from "react";

const Title = ({color, onClick, isFlipped}) => {
    return (
        <div
        style={{
            width: '100px',
            height: '100px',
            background: isFlipped ? color : 'gray',
            margin: '5px',
            display: 'inline-block',
            cursor: 'pointer'
        }}
        onClick={onClick}
        />
    );
};
export default Title
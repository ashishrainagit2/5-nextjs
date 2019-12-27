import React, { Component } from 'react';

const Button = props => {
    const path = "/" + props.path;

    return (
        <div>
            <button onClick= {props.handler}>
                    {props.title}
            </button>
        <style>{`
            button {
                text-align: center;
                padding: 10px;
                border: 1px solid grey;
                border-radius: 5px;
                margin: 10px;
            }
        `}
        </style>
        </div>
    )
}

export default Button;
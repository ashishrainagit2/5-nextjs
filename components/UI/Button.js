import React, { Component } from 'react';
import Router from 'next/router'

const Button = props => {
    const path = "/" + props.path;

    const handler = () => {
        Router.push({
          pathname: path
        })
      }

    return (
        <div>
            <button onClick= {handler}>
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
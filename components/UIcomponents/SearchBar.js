import React, { Component } from 'react';

const SearchBar = props => {
    return (
        <div>
            <button  className={props.filled}>
                    {props.title} Testing ...
            </button>
        <style>{`
            button {
                text-align: center;
                padding: 10px;
                border: 1px solid grey;
                border-radius: 5px;
                margin: 10px;
            }
            green {
                background: green;
            }
        `}
        </style>
        </div>
    )
}

export default SearchBar;
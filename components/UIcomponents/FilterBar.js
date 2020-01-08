import React, { Component } from 'react';
import Router from 'next/router'

const filterBar = props => {
    return (
        <div class="custom-select">
            <p><label class="custom-select">
                <select>
                    <option>Sushi</option>
                    <option>Blue cheese with crackers</option>
                    <option>Steak</option>
                    <option>Other</option>
                </select>
            </label>
            </p>

        <style>{`
            p {
                font-family: sans-serif;
            }
            
            label.custom-select {
                position: relative;
                display: inline-block;
            }
            
                .custom-select select {
                    display: inline-block;
                    border: 2px solid #bbb;
                    padding: 4px 3px 3px 5px;
                    margin: 0;
                    font: inherit;
                    outline:none; /* remove focus ring from Webkit */
                    line-height: 1.2;
                    background: #f8f8f8;
                    
                    -webkit-appearance:none; /* remove the strong OSX influence from Webkit */
                    
                    -webkit-border-radius: 6px;
                    -moz-border-radius: 6px;
                    border-radius: 6px;
                }
            
                /* for Webkit's CSS-only solution */
                @media screen and (-webkit-min-device-pixel-ratio:0) { 
                    .custom-select select {
                        padding-right:30px;    
                    }
                }
                
                /* Since we removed the default focus styles, we have to add our own */
                .custom-select select:focus {
                    -webkit-box-shadow: 0 0 3px 1px #c00;
                    -moz-box-shadow: 0 0 3px 1px #c00;
                    box-shadow: 0 0 3px 1px #c00;
                }
                
                /* Select arrow styling */
                .custom-select:after {
                    content: "▼";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    font-size: 60%;
                    line-height: 30px;
                    padding: 0 7px;
                    background: #bbb;
                    color: white;
                    
                    pointer-events:none;
                    
                    -webkit-border-radius: 0 6px 6px 0;
                    -moz-border-radius: 0 6px 6px 0;
                    border-radius: 0 6px 6px 0;
                }
                
                .no-pointer-events .custom-select:after {
                    content: none;
                }
        `}
        </style>
        </div>
    )
}

export default filterBar;
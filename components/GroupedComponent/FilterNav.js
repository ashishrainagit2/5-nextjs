import React, { Component } from 'react';
import SearchBar from "../UIcomponents/SearchBar";
import FilterBar from "../UIcomponents/FilterBar"

const filterNav = props => {
    return (
        <div className="flex-container">
            <div className="searcBarWrapper">
                <SearchBar  />
            </div>
            <div className="flex-container filterWrapper">
                <FilterBar />
                <FilterBar />
            </div>
        <style>{`
           .flex-container {
                display: flex;
                max-width: 1208px;
                margin: 0 auto;
           }
            .searcBarWrapper {
                flex-grow: 1;
                display:flex;
                justify-content: flex-start;
            }
            .filterWrapper {
                flex-grow: 1;
                display: flex;
                justify-content : flex-end;
            }
        `}
        </style>
        </div>
    )
}

export default filterNav;
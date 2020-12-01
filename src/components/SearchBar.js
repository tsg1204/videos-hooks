import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = event => {
        event.preventDefault();

        //callback from parent component will be here
        onSearchSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
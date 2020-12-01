import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    handleOnInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        //callback from parent component will be here
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.handleOnInputChange}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;
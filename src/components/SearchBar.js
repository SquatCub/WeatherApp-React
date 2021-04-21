import React from 'react';

class SearchBar extends React.Component {
    //Controlled events
    state = { location: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.location); 
        //console.log(this.state.term);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search location</label>
                        <input
                            className="form-control"
                            placeholder="Enter location" 
                            type="text" 
                            value={this.state.location} 
                            onChange={(e) => this.setState({location: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
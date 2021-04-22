import React from 'react';

class SearchBar extends React.Component {
    // State para la ciudad ingresada
    state = { city: ''}

    // En caso de enviar el formulario
    onFormSubmit = (event) => {
        // Se previene el comportamiento default
        event.preventDefault();
        // Se "mandan" los parametros al componente padre (App.js)
        this.props.onSubmit(this.state.city); 
    }
    // Render principal
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label className="font-weight-bold">Search city</label>
                        <div className="d-flex justify-content-center">
                            {/* Input con sus manejadores de eventos */}
                            <input
                                className="form-control col-md-5 col-sm-6 mr-2"
                                placeholder="Enter a city" 
                                type="text" 
                                value={this.state.city} 
                                onChange={(e) => this.setState({city: e.target.value})} 
                            />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
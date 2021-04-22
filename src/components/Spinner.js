import React from 'react';
const Spinner = (props) => {
    return(
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
            <h6>{props.message}</h6>
        </div>
    );
};
Spinner.defaultProps = {
    message: "Waiting for position"
};

export default Spinner;
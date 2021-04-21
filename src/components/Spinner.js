import React from 'react';

const Spinner = (props) => {
    return(
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
            {props.message}
        </div>
    );
};
Spinner.defaultProps = {
    message: "Loading"
};

export default Spinner;
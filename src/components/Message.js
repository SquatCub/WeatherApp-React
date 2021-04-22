import React from 'react';

const renderImage = (image) => {
    return image ? (<img alt="search" className="img-fluid" width="100" src={image} />): '';
}

const Message = (props) => {
    return (
        <div>
            <h3 className="text-capitalize">{props.message}</h3>
            {renderImage(props.image)}
        </div>
    );
}
Message.defaultProps = {
    image: ""
};

export default Message;
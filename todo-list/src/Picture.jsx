import React from "react";
import PropTypes from 'prop-types';

function Picture({ src, alt }) {
    return (<img src={src} alt={alt} />

    )
}
// example of propTypes used for rendering image
Picture.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Picture;
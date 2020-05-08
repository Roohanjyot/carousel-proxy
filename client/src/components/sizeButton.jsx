import React from "react";

class SizeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        if (this.props.available === true) {
            // add class available
            return (
                <button className="sizeAvailable">{this.props.size}</button>
            )
        } else {
            // add class not available
            return (
                <button className="sizeNotAvailable">{this.props.size}</button>
            )
        }
    }
}

export default SizeButton;
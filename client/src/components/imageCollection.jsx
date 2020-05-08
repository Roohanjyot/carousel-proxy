import React from "react";

class ImageCollection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props, "imagecollection props")
        return (
            <div className="imageElement">
                <img src={this.props.image} />
            </div>
        );
    }
}

export default ImageCollection;
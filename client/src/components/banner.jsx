import React from "react";

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props, 'props Banner')
        return (
            <div className="banner">
                <h3>{this.props.productName}</h3>
                <a>Shop all Original Use</a>
                <hr></hr>
            </div>
            )
    }
}

export default Banner;
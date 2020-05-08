import React from "react";
import SizeButton from "./sizeButton.jsx";

class Configurations extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props, "config props")
        // console.log(typeof this.props.price)
        if (this.props.price === undefined) {
            // do something
            return null;
        } else {
            // do something else
            return (
                <div className="configurations">
                    <hr></hr>
                    <div className="priceAndRatings">
                        <h3>${this.props.price.toFixed(2)}</h3>
                    </div>
                    <div className="rating">
                        <h5>rating : {this.props.rating.toFixed(2)}</h5>
                    </div>
                    <div className="sizes">
                        {this.props.sizes.map(sizeObj => {
                            return <SizeButton key={sizeObj._id} size={sizeObj.size} available={sizeObj.availble}/>
                        })}
                    </div>
                </div>
            )
        }
     
    }
}

export default Configurations;
import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get("/fetch")
        .then(res => {console.log(res.data[0])})
    }

    render() {
        console.log("App is working!")
        return (
            <div>
                <h1>App is Working!</h1>
            </div>
        )
    }
}

export default App;
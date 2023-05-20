import { Component } from "react";
import React from "react";
class ClsState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Deep",
            age: "20",
            study: "Bsc(cs)"
        };
    }
    render() {
        return (
            <table className="bg-dark text-white w-75 mx-auto mt-5">
                <tbody>
                    <tr>
                        <td>
                            <h1>My Name is <span style={{color:"orange"}}>{this.state.name}</span></h1>
                        </td>
                        <td>
                            <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={() => this.setState({ name: "Divyesh" })}>Update Movie</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>My Age is <span style={{color:"orange"}}> {this.state.age}</span></h1>
                        </td>
                        <td>
                            <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={() => this.setState({ age: "22" })}>Update age</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>My Study is <span style={{color:"orange"}}>{this.state.study}</span></h1>
                        </td>
                        <td>
                            <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={() => this.setState({ study: "Web Deeloper" })}>Update study</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ClsState;
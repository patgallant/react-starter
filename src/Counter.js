import React from "react";
import { Component } from "react";

/**
 * A counter button: tab the button to increase the count.
 */
class Counter extends Component {
    /**
     * Contains any logic needed when initializing the Counter.
     */
    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    /**
     * Renders the Counter component.
     */
    render() {
        return (
            <button
                onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default Counter;
import React from "react";
import { Link } from "react-router";
import GraphiQL from 'graphiql';

class Console extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    graphQLFetcher(graphQLParams) {
        return fetch(window.location.origin + '/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphQLParams)
        }).then(response => response.json());
    }

    style() {
        return {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed',
            zIndex: 999,
            backgroundColor: 'white'
        }
    }

    render() {
        return (
            <div style={this.style()}>
                <GraphiQL fetcher={this.graphQLFetcher} />
            </div>
        );
    }
}

export default Console;

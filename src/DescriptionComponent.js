import React, {Component} from 'react';
import './App.css';

/**
 * Komponent opisu naszej karty.
 */
export default class DescriptionComponent extends Component {
    render() {
        return (
            <div style={{width: 500, height: 500}}>
                Name: {this.props.card.name}
                <br/>
                Card set: {this.props.card.cardSet}
                <br/>
                Text: {this.props.card.text}
            </div>
        );
    }
}
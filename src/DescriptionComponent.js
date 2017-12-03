import React, {Component} from 'react';
import './App.css';

/**
 * Komponent opisu naszej karty.
 */
export default class DescriptionComponent extends Component {
    render() {
        return (
            <div style={{width: 500, height: 500}}>
                {this.props.card.name}
                <br/>
                {this.props.card.cardSet}
            </div>
        );
    }
}
import React, {Component} from 'react';
import './ImgComponent.css';

// Komponent obrazka normalnej karty

export default class ImgComponent extends Component {
    render() {
        return (
            <div className="cards-display">

               <img src={this.props.img} onError={this.props.onError} alt="Card face" />

            </div>
        );
    }
}

import React, {Component} from 'react';
import './ImgComponent.css';

// Komponent obrazka normalnej karty

export default class GImgComponent extends Component {
    render() {
        return (
            <div className="cards-display">
                <img src={this.props.imgGold} onError={this.props.onError} alt="Gold card face" />
            </div>

        );
    }
}

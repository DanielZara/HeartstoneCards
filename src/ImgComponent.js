import React, {Component} from 'react';
import './App.css';

/**
 * Komponent obrazka naszej karty.
 */
export default class ImgComponent extends Component {
    render() {
        return (
            <div style={{width:350, height:500, float:"left"}}>
               <img src={this.props.img} onError={this.props.onError} />
            </div>
        );
    }
}
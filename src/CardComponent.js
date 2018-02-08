import React, {Component} from 'react';
import DescriptionComponent from "./DescriptionComponent";
import ImgComponent from "./ImgComponent";
import GImgComponent from "./GImgComponent";
import './CardComponent.css';

export default class CardComponent extends Component {
    constructor(){
        super();
        this.state = {hasImg:true};
    }
    render() {
        if (this.props.card && this.state.hasImg)
            return (
                <div className="container">
                    <ImgComponent className="cards-component" onError={()=>this.onImgError()} img={this.props.card.img}/>
                    <GImgComponent className="cards-component" onError={()=>this.onImgError()} imgGold={this.props.card.imgGold}/>
                    <DescriptionComponent className="descryption-component" card={this.props.card}/>
                </div>
            );
        else return null;
    }

    onImgError(){
        this.setState({hasImg:false})
    }
}
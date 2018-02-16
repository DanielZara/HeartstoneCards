import React, {Component} from 'react';
import DescriptionComponent from "./DescriptionComponent";
import ImgComponent from "./ImgComponent";
import GImgComponent from "./GImgComponent";
import './CardComponent.css';

export default class CardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasImg:true,
            isToggleOn: false
        };
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    showGoldAndProps() { {/*Metoda wyświetlająca złotą wesję karty i informacje o niej (nie działa)*/}
        if (this.state.isToggleOn) {
            return (<div onMouseLeave={this.handleEvent} className="container">
                <GImgComponent className="cards-component" onError={()=>this.onImgError()} imgGold={this.props.card.imgGold}/>
                <DescriptionComponent className="descryption-component" card={this.props.card}/>
                </div>
            );
        } else { return (
            <div onMouseEnter={this.handleEvent} className="container-mouse-out">
            <ImgComponent   className="cards-component" onError={()=>this.onImgError()} img={this.props.card.img}/>
                <br/>
            </div>);
        }
    }

    render() {
        if (this.props.card && this.state.hasImg)
            return (
                <div>
                    {this.showGoldAndProps()}
                </div>
            );
        else return null;
    }

    onImgError(){
        this.setState({hasImg:false})
    }
}
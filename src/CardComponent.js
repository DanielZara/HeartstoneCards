import React, {Component} from 'react';
import './App.css';
import DescriptionComponent from "./DescriptionComponent";
import ImgComponent from "./ImgComponent";

/**
 * Komponent karty naszej aplikacji.
 */
export default class CardComponent extends Component {
    constructor(){
        super();
        //Deklarujemy początkowy stan komponentu
        this.state = {hasImg:true};
    }
    render() {
        //Jeżeli mamy kartę oraz karta ma obrazek.
        if (this.props.card && this.state.hasImg)
            return (
                <div>
                    {/*Property onError to funkcja ktora wykonuje metde na tym obiekcie, w tym wypadku this.onImgError()*/}
                    <ImgComponent onError={()=>this.onImgError()} img={this.props.card.img}/>
                    {/*Property text to property DescriptionComponent*/}
                    <DescriptionComponent card={this.props.card}/>
                </div>
            );
        else return null;
    }

    /**
     * Jeżeli jest błąd ładowania karty to ustawiamy stan hasImg na false. Czyli karty sie nie udalo zaladowac - nie ma karty.
     */
    onImgError(){
        this.setState({hasImg:false})
    }
}
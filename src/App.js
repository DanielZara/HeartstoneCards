import React, {Component} from 'react';
import './App.css';
import CardComponent from "./CardComponent";
import {keyMashape} from "./key";

//Jezeli chcesz latwo przechodzi po komponentach używaj skrutu ctrl + klik na element.
// Aby szybciej pracoac zywaj skrótu ctrl + tab aby wrócić do poprzedniego pliku.


export default class App extends Component {
    constructor(){
        super();

        console.log(keyMashape)

        this.state = {
            epicCards:[],
            search: ""
        };

        this.fetchEpicCards();
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
            cards: this.state.cards.filter((card) => new RegExp(event.target.value, "i").exec(card.name))
        });
    }

    render() {
        return (
            <div>
                {this.renderEpicCards()}
                {/*{this.renderLegendaryCards()}*/}

            </div>
        );
    }

    renderEpicCards(){

        return this.state.epicCards.slice(104, 107).map(card=><CardComponent
            key={card.cardId}
            card={card}/>)

    }

    fetchEpicCards(){

        //fetch zwraca Promise - zapraszam do zapoznania sie z promisami w internecie.

        fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Epic',
            {mode: 'cors', headers: {
                    "X-Mashape-Key":keyMashape,
                    "Accept": "application/json"
                }})
            .then((data)=>{data.json()
                .then(epicCards=>{this.setState({epicCards:epicCards});
                });

            })
    }



}
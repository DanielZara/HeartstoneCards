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

        this.state = {cards:[]};

        this.fetchCard();
    }


    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }


    renderCards(){

        return this.state.cards.slice(130, 150).map(card=>
            <div><CardComponent card={card}/></div>)
    }


    fetchCard(){

        //fetch zwraca Promise - zapraszam do zapoznania sie z promisami w internecie.

        fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Epic',
            {mode: 'cors', headers: {
                    "X-Mashape-Key":keyMashape,
                    "Accept": "application/json"
                }})
            .then((data)=>{
                data.json().then(cards=>{
                    this.setState({cards:cards});
                });

            })
    }
}

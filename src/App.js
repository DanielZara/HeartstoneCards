import React, {Component} from 'react';
import './App.css';
import CardComponent from "./CardComponent";
import key from "../key";

//Jezeli chcesz latwo przechodzi po komponentach używaj skrutu ctrl + klik na element.
// Aby szybciej pracoac zywaj skrótu ctrl + tab aby wrócić do poprzedniego pliku.

/**
 * Wejscie naszej aplikacji
 */
export default class App extends Component {
    constructor(){
        super();

        console.log(process.env.SOME_ENV_VAR)
        //Deklarujemy początkowy stan komponentu
        this.state = {cards:[]};
        //Wywołujemy pobieranie kart.
        this.fetchCard();
    }

    /**
     * Metoda render musi się znalezdz w kazdym komonencie.
     * To ona mówi co zostanie wyrenderowane na ekranie ( wyswietlone)
     */
    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }

    /**
     * Metoda renderująca liste kart
     */
    renderCards(){
        //this.state.cards to tablica.
        //prototyp tablicy w es6 posiada metode map.
        //Zapoznaj sie z dokumentacja w google ( Array prototype map )
       return this.state.cards.map(card=><div><CardComponent card={card}/></div>)
    }

    /**
     * Metoda pobierająca karty i zapisująca je do stanu. ( this.state.cards)
     */
    fetchCard(){
        //fetch to metoda do pobrania danych z API gdzie:
        //Pierwszy argument oznacza scieżke do zasobu (http//costam)
        //kolejny argument to konfiguracja zapytania. w tym wypadku podajemy klucz do mashape (wymagany)
        // oraz dane jakie akceptujemy i to jest json.
        //fetch zwraca Promise - zapraszam do zapoznania sie z promisami w internecie.
        //Promise zawiera 2 wbudowane metody. then oraz catch gdzie
        // then to funkcja ktora jako parametr otrzymuje dane ( w wypadku sukcesu pobrania danych )
        // catch to funkca która jako parametr otrzymuje błąd ( w wypadku niepowodzenia pobrania danych )
        fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Legendary',
            {mode: 'cors', headers: {
                "X-Mashape-Key":key,
                    "Accept": "application/json"
                }})
            //Jezeli mamy dane to wtedy zapisujemy je do state
            .then((data)=>{
                data.json().then(cards=>{
                    //Zapisanie kard do stanu.
                    this.setState({cards:cards});
                });

            })
    }
}

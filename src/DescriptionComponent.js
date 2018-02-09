import React, {Component} from 'react';
import './DescriptionComponent.css';

// Komponent opisu karty

const tooltips = {
    nameInfo: "The card name.",
    cardSetInfo: "The set name.",
    typeInfo: "The card type. Example values: Minion, Spell, Weapon, Hero, Hero Power, Enchantment.",
    factionInfo: "The faction of the card. Example values: Alliance, Horde, Neutral.",
    rarityInfo:	"The rarity of the card. Example values: Free, Common, Rare, Epic, Legendary.",
    costInfo: "The mana cost of this card.",
    attackInfo:	"The attack of the card.",
    healthInfo:	"The health of the card.",
    durabilityInfo:	"The durability of the card. Used for Weapons.",
    armorInfo: "The armor of the card. Seen on hero cards from the Knights of the Frozen Throne expansion.",
    textInfo: "The text of the card when it is in your hand.",
    inPlayTextInfo: "The text of the card when it is in play.",
    flavorInfo: "The flavor text of the card.",
    artistInfo: "The artist of the card.",
    collectibleInfo: "Indicates if the card is collectible.",
    eliteInfo: "Indicates if the card is elite.",
    raceInfo: "The race of the card. Example values: Murloc, Demon, Beast, Totem, Pirate, Dragon.",
    playerClassInfo: "The player class this card belongs to. Example values: Druid, Hunter, Mage, Paladin.",
    multiClassGroupInfo: "Indicates that this card belongs to multiple classes. First introduced in the Mean Streets of Gadgetzan expansion. Example values: Grimy Goons, Jade Lotus, Kabal.",
    classesInfo: "Indicates which classes this card belongs to. Only applies to multi class cards. Example value for a Kabal tri-class card: Mage, Priest, Warlock.",
    howToGetInfo: "How to get this card. Only present if you can obtain this card from a method other than opening a booster pack.",
    howToGetGoldInfo: "How to get the gold version of this card. Only present if you can obtain this card from a method other than opening a booster pack."
};

export default class DescriptionComponent extends Component {

    /**
     * Metody wyświetlające właściwość karty i jej wartość jesli jest w JSONie
     * + tooltipy wsadzone na chama, ale spróbuję zaciągać je z oddzielnego obiektu
     */

    factionVisible () {
        if (this.props.card.faction) {
            return (<span><b className="tooltip">Faction:<span className="tooltiptext">{tooltips.factionInfo}</span>
            </b>{this.props.card.faction}<br/></span>);
        }
    }

    /**
     * Własciwość flavor i text zawiera w sobie HTML więc wewnętrzny tekst trzeba było wyciągnać przez dangerouslySetInnerHTML
     */

    flavorVisible () {
        if (this.props.card.flavor) {
            return (<span><b className="tooltip">Flavor: <span className="tooltiptext">{tooltips.flavorInfo}</span>
            </b> <span className="flavor" dangerouslySetInnerHTML={{__html: this.props.card.flavor}}></span><br/></span>);
        }
    }

    descryptionVisible () {
        if (this.props.card.text) {
            return (<span><b className="tooltip">Descryption: <span className="tooltiptext">{tooltips.textInfo}</span>
            </b> <span dangerouslySetInnerHTML={{__html: this.props.card.text}}></span><br/></span>);
        }
    }

    attackVisible () {
        if (this.props.card.attack) {
            return (<span><b className="tooltip">Attack: <span className="tooltiptext">{tooltips.attackInfo}</span></b>
                &nbsp; <img alt="Attack" height="14" src="http://hearthstoneapi.com/images/icons/attack.png"/><b> </b>
                {this.props.card.attack}<br/></span>);
        }
    }

    healthVisible () {
        if (this.props.card.health) {
            return (<span><b className="tooltip">Health: <span className="tooltiptext">{tooltips.healthInfo}</span></b>
                &nbsp; <img alt="Health" height="14" src="http://hearthstoneapi.com/images/icons/health.png"/><b> </b>
                {this.props.card.health}<br/></span>);
        }
    }

    artistVisible () {
        if (this.props.card.artist) {
            return (<span><b className="tooltip">Artist:<span className="tooltiptext">
                {tooltips.artistInfo}</span></b> {this.props.card.artist}<br/></span>);
        }
    }

    eliteVisible () { // metoda wyświetlająca elite yes/no
        if (this.props.card.elite) {
            return (<span><b className="tooltip">Elite:<span className="tooltiptext">
                {tooltips.eliteInfo}</span></b> Yes<br/></span>);
        }else{return (<span><b className="tooltip">Elite:<span className="tooltiptext">
                {tooltips.eliteInfo}</span></b> No<br/></span>);}
    }

    collectibleVisible () { // metoda wyświetlająca collectible yes/no
        if (this.props.card.collectible) {
            return (<span><b className="tooltip">Collectible:<span className="tooltiptext">
                {tooltips.collectibleInfo}</span></b> Yes<br/></span>)
        }else{return (<span><b className="tooltip">Collectible:<span className="tooltiptext">
                {tooltips.collectibleInfo}</span></b> No<br/></span>)}
    }

    durabilityVisible () {
        if (this.props.card.durability) {
            return (<span><b className="tooltip">Durability:<span className="tooltiptext">
                {tooltips.durabilityInfo}</span></b> {this.props.card.durability}<br/></span>);
        }
    }

    armorVisible () {
        if (this.props.card.armor) {
            return (<span><b className="tooltip">Armor:<span className="tooltiptext">{tooltips.armorInfo}
            </span></b> {this.props.card.armor}<br/></span>);
        }
    }

    inPlayTextVisible () {
        if (this.props.card.inPlayText) {
            return (<span><b className="tooltip">In play text:<span className="tooltiptext">
                {tooltips.inPlayTextInfo}</span></b> {this.props.card.inPlayText}<br/></span>);
        }
    }

    raceVisible () {
        if (this.props.card.race) {
            return (<span><b className="tooltip">Race:<span className="tooltiptext">{tooltips.raceInfo}
            </span></b> {this.props.card.race}<br/></span>);
        }
    }

    multiClassGroupVisible () {
        if (this.props.card.multiClassGroup) {
            return (<span><b className="tooltip">Crime family:<span className="tooltiptext">{tooltips.multiClassGroupInfo}
            </span></b> {this.props.card.multiClassGroup}<br/></span>);
        }
    }

    classesVisible () {
        if (this.props.card.classes) {
            return (<span><b className="tooltip">Belongs to classes:<span className="tooltiptext">
                {tooltips.classesInfo}
            </span></b> {this.props.card.classes}<br/></span>);
        }
    }

    howToGetVisible () {
        if (this.props.card.howToGet) {
            return (<span><b className="tooltip">How to get:<span className="tooltiptext">
                {tooltips.howToGetInfo}
            </span></b> {this.props.card.howToGet}<br/></span>);
        }
    }

    howToGetGoldVisible () {
        if (this.props.card.howToGetGold) {
            return (<span><b className="tooltip">How to get gold version:<span className="tooltiptext">
                {tooltips.howToGetGoldInfo}
            </span></b> {this.props.card.howToGetGold}<br/></span>);
        }
    }

    /**
     * Metoda wyświetlająca własciwość rarity w kolorze odpowiadającym kolorowi rzadkości karty
     */

    rarityDisplay () { // metoda zmieniająca napis rarity
        if (this.props.card.rarity) {
            switch(this.props.card.rarity) {
                case "Free":
                    return (<span><b className="tooltip">Rarity: <span className="tooltiptext">{tooltips.rarityInfo}
                    </span></b><span className="rarity-free"> {this.props.card.rarity}<br/></span></span>);
                    break;
                case "Common":
                    return (<span><b className="tooltip">Rarity: <span className="tooltiptext">{tooltips.rarityInfo}
                    </span></b><span className="rarity-common"> {this.props.card.rarity}<br/></span></span>);
                    break;
                case "Rare":
                    return (<span><b className="tooltip">Rarity: <span className="tooltiptext">{tooltips.rarityInfo}
                    </span></b><span className="rarity-rare"> {this.props.card.rarity}<br/></span></span>);
                    break;
                case "Epic":
                    return (<span><b className="tooltip">Rarity: <span className="tooltiptext">{tooltips.rarityInfo}
                    </span></b><span className="rarity-epic"> {this.props.card.rarity}<br/></span></span>);
                    break;
                case "Legendary":
                    return (<span><b className="tooltip">Rarity: <span className="tooltiptext">{tooltips.rarityInfo}
                    </span></b><span className="rarity-legendary"> {this.props.card.rarity}<br/></span></span>);
                    break;
                default:
                    return (<span>Error</span>);
            }

        }
    }

    /**
     * Render wyświetlający wszystkie własciwości z czego niektóre to html a niektóre wywołania metod. Właściwości w HTML pojawiają się w każdej karcie.
     */

    render() {
       return (
            <div className="description-display">

                <b className="tooltip">Name:<span className="tooltiptext">{tooltips.nameInfo}
                </span></b> <b className="card-name">{this.props.card.name}</b>
                <br/>

                <b className="tooltip">Card set:<span className="tooltiptext">
                    {tooltips.cardSetInfo}</span></b> {this.props.card.cardSet}
                <br/>

                {this.descryptionVisible()}

                <b className="tooltip">Type:<span className="tooltiptext">
                The card type. Example values: Minion, Spell, Weapon, Hero, Hero Power, Enchantment.
                </span></b> {this.props.card.type}
                <br/>

                {this.raceVisible()}

                {this.factionVisible()}

                {this.rarityDisplay()}

                <b className="tooltip">Cost: <span className="tooltiptext">
                The mana cost of this card.</span></b>
                &nbsp; <img alt="Cost" height="10" src="http://hearthstoneapi.com/images/icons/mana-crystal.png"/> {this.props.card.cost}
                <br/>

                {this.attackVisible()}

                {this.healthVisible()}

                {this.flavorVisible()}

                {this.artistVisible()}

                {this.collectibleVisible()}

                {this.eliteVisible()}

                <b className="tooltip">Player class:<span className="tooltiptext">
                    {tooltips.playerClassInfo}
                </span></b> {this.props.card.playerClass}
                <br/>

                {this.durabilityVisible()}

                {this.armorVisible()}

                {this.inPlayTextVisible()}

                {this.multiClassGroupVisible()}

                {this.classesVisible()}

                {this.howToGetVisible()}

                {this.howToGetGoldVisible()}
            </div>
        );
    }
}
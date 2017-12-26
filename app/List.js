import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    render(){
        var cards = this.props.cards && this.props.cards.length ?
            this.props.cards.map((card, index) => {
                return <Card key={`card-${index}`} id={card.id}
                            title={card.title}
                            description={card.description}
                            tacks={card.tacks} />
            })
            : null;
        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>    
        );
    }
}

export default List;
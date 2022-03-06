import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import cardsDetails from '../cardsDetails';
import offerImg from '../images/offer.jpg';

function Cards() {

    // console.log(cardsDetails);
    return (
        <div className='cards' >        
            <h1>Exclusive Holidays For Any Travelers</h1>
            <div className='card-btn'>
                <button className='bookButton'>BOOK NOW </button>
            </div>
            <div href="">
                <img className='imgOffer' src={offerImg} alt='offers'></img>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {cardsDetails.map(
                            cardTerm =>
                                <CardItem
                                    key={cardTerm.id}
                                    text={cardTerm.text}
                                    label={cardTerm.label}
                                    path={cardTerm.path}
                                    src={cardTerm.src}
                                />
                        )}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Cards

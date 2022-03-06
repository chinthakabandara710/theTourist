import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <div>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <div className='cards__item__pic-wrap'>{props.text}
                        <img
                            className='cards__item__img'
                            alt='Travel '
                            src={props.src}
                        />
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.label}</h5>
                    </div>
                </Link>
            </li>
        </div>
    );
}

export default CardItem;
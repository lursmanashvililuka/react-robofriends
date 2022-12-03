import React from 'react';



const Card = ({ name, email, id }) => {
    return(

        <div className='tc bg-light-green dib br3 pas ma2 grow bu2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id} ?200x200x`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );

}
export default Card;

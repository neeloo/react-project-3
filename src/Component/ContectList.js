import React from 'react'
import ContectCard from './ContectCard';

const ContectList=(props)=> {
    const rendercontect = props.contact.map((contact) => {
        return (
             <ContectCard  contact={contact}/>

        );
    })

    return (
        <div className='ui called list'> {rendercontect} </div>
    )
}

export default ContectList;
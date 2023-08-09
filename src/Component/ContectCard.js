import React from 'react'
import user from '../Image/img.jpg';

const ContectCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className=" ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trace altert icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    )
}

export default ContectCard;
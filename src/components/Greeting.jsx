import React from "react";
import {Link} from "react-router-dom";


const Greeting = () => {
    return (
        <div className={'greeting'}>
            <h1>Hello, friend!</h1>
            <Link to={'/users'}>
                <button className={'btn'}>Посмотреть пользователей</button>
            </Link>

        </div>
    )
}

export default Greeting
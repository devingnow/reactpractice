import React from 'react'
import MainHeader from '../../atoms/Main/MainHeader'
import MainBody from '../../atoms/Main/MainBody'


const Main = () => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    console.log(getCookie())

    return (
        <div>
            <MainHeader />
            <MainBody />
        </div>
    )
}

export default Main

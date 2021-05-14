import React from 'react'
import Sidebar from './Sidebar/Sidebar.js'
import Mappe from './Map/Map.js'

function MainPage() {
    return (<div className="MainPage">
        <Sidebar />
        <Mappe />
    </div>);
}

export default MainPage
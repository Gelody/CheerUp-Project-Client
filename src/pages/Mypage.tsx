import React from 'react';
import Dashboard from './Dashboard';
import MycardList from './MycardList';
import CheeringList from './CheeringList'
import Nav from './Nav'

function Mypage() {
    return (<div>
        <Nav></Nav>
        <Dashboard></Dashboard>
        <MycardList></MycardList>
        <CheeringList></CheeringList>
    </div>);
}

export default Mypage;
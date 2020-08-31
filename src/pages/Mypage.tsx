import React from 'react';
import MypageNav from './MypageNav';
import Dashboard from './Dashboard';
import MycardList from './MycardList';
import CheeringList from './CheeringList'

function Mypage() {
    return (<div>
        <MypageNav></MypageNav>
        <Dashboard></Dashboard>
        <MycardList></MycardList>
        <CheeringList></CheeringList>
    </div>);
}

export default Mypage;
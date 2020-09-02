import React from 'react';
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className="dashborad_wrap">
                <h1>대시보드</h1>
                <span>당신의 응원레벨</span>
                <span>LV.22</span>
                <br />
                <li>총 받은 응원 수 누적데이터
                <p>지금까지 ~</p>
                </li>
                <li>총 응원 한 수 누적데이터
                <p>지금까지 ~</p>
                </li>
            </div>
        </>
    )
}

export default Dashboard;
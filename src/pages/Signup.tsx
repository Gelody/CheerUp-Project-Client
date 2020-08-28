import React from 'react';
import './Signup.css'


function Signup() {
    return (
        <div>
            <form>
                <input className="signup_form"
                    type="email"
                    placeholder="아이디 (이메일 주소)">
                </input>

                <input className="signup_form"
                    type="username"
                    placeholder="이름">
                </input>

                <input className="signup_form"
                    type="password"
                    placeholder="비밀번호">
                </input>

                <input className="signup_form"
                    type="password"
                    placeholder="비밀번호 확인">
                </input>

                <button className="signup_button" type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default Signup;
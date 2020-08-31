import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
    return (
        <div>
            <form>
                <input className="login_form"
                    type="email"
                    placeholder="아이디(이메일 주소)">
                </input>

                <input className="login_form"
                    type="password"
                    placeholder="비밀번호">
                </input>

                <button className="login_button" type="submit">로그인</button>

                <p className="text">또는</p>

                <button className="google_button">구글 로그인</button>
                <button className="kakao_button">카카오 로그인</button>

                <p className="text">계정이 없으신가요?</p>
                <Link to="/signup" className="signup_link">회원가입</Link>
            </form>
        </div>
    )
}

export default Login;
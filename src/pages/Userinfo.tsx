import React from 'react';
import './Userinfo.css';

function Userinfo() {
    return (
        <div>
            <form>
                <div className="userinfo_birth_box">
                    <select className="userinfo_birth">
                        <option value="0">생년</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                    </select>


                    <select className="userinfo_birth">
                        <option value="Month">월</option>
                        <option value="Jan">1월</option>
                        <option value="Feb">2월</option>
                        <option value="Mar">3월</option>
                        <option value="Apr">4월</option>
                        <option value="May">5월</option>
                        <option value="Jun">6월</option>
                        <option value="Jul">7월</option>
                        <option value="Aug">8월</option>
                        <option value="Sep">9월</option>
                        <option value="Oct">10월</option>
                        <option value="Nov">11월</option>
                        <option value="Dec">12월</option>
                    </select>

                    <select className="userinfo_birth">
                        <option value="0">일</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <br />
                <select className="userinfo_sex">
                    <option value="sex">성별</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
                <br />
                <select className="userinfo_interest">
                    <option value="interest">관심분야</option>
                    <option value="it">IT</option>
                    <option value="sports">스포츠</option>
                    <option value="cook">요리</option>
                    <option value="music">음악</option>
                    <option value="cloths">의류</option>
                </select>
                <br />
                <button className="next_button" type="submit">Next</button>
            </form>
        </div >
    )
}

export default Userinfo;
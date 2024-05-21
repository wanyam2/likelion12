import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="links">
                <a href="/" className="link_text">네이버를 시작페이지로</a>
                <a href="/" className="link_text">쥬니어네이버</a>
                <a href="/" className="link_text">해피빈</a>
            </div>
            <a href="/"><img src="" className="img_logo" alt="네이버 로고"/></a>
            <form>
                <fieldset>
                    <legend className="visually-hidden">검색</legend>
                    <div className="search_box">
                        <input type="text" maxLength="225" tabIndex="1" />
                        <button type="submit" tabIndex="2">
                            검색
                        </button>
                    </div>
                </fieldset>
            </form>
            <nav>
                <div className="nav_items">
                    <ul>
                        {/* 네비게이션 메뉴들 */}
                    </ul>
                    <div className="keyword">
                        <span className="color_naver">1</span>
                        <span>LG</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
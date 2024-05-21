import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="notice_box">
                <a href="/">공지사항</a>
                <a href="/">서비스 전체보기</a>
            </div>
            <div className="aside_box">
                {/* 유저 영역, 파트너스 영역 */}
            </div>
            <div className="bottom_box">
                <ul>
                    {/* 하단 링크들 */}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
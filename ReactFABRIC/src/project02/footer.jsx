import React from 'react';
import './style/footer.css';
import logoBlack from './img/logo_black-1.png';

export function Footer() {
  return (
    <footer>
      <div className="footertarget"></div>
      <div className="footer-wrap">
        <div className="footer-contents">
          <div className="footer-logo">
            <img src={logoBlack} alt="Logo" />
          </div>
          <div className="footer-row">
            <div className="footer-top">
              <div className="footer-col">
                <ul className="footer-menu">
                  <li><a href="#">개인정보처리방침</a></li>
                  <li><a href="#">이메일무단수집거부</a></li>
                  <li><a href="#">이용약관</a></li>
                  <li><a href="#">통신판매신고번호: 제 2020-서울특별시-1419호</a></li>
                </ul>
                <ul className="footer-sns">
                  <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                  <li><a href="#"><i className="bi bi-line"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <address>
                그라피코스 스튜디오 서울사무실 사무실장 신영빈 사업자등록번호 117-13-49878
              </address>
              <p>서울시 노원구 공릉2동 26-21 제1실습관 507호 코자인 스튜디오 Tel. 070-7566-1666 E-mail. touchxe@gmail.com</p>
            </div>
            <p>Copyright © 2021 그라피코스 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
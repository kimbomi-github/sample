import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './auth.module.css'
const cx = classNames.bind(styles)

const Login = () => {
  return (
    <div className={cx('login')}>
      <div className={cx('login__inner')}>
        <h1>
            모든 회원에게 드리는
            <b>첫 고객 20% 할인</b>
            가장 먼저 받아보세요!
        </h1>
        <p>로그인 · 회원가입 시<br />고객님께 발급된 혜택, 예약 정보, 내원 이력 등<br />개인화된 서비스를 이용하실 수 있습니다</p>
        <button className={cx('kakao')}>카카오 로그인</button>
        <button className={cx('naver')}>네이버 로그인</button>

        <Link to="" className={cx('benefit-view')}>회원·멤버십 혜택 보기</Link>
      </div>
    </div>
  )
}

export default Login
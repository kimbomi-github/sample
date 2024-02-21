import React from 'react'
import { useNavigate } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Header.module.css'
const cx = classNames.bind(styles)

export default function Header() {  
    const navigate = useNavigate();

    return (
        <header>
            <button className={cx('btn-back')} onClick={() => navigate(-1)}>뒤로 가기</button>
            <div className={cx('nav-items')}>
                <button className={cx('btn-home')} onClick={() => navigate('/')}>홈</button>
                <button className={cx('btn-search')} onClick={() => navigate('/search')}>검색</button>
                <button className={cx('btn-cart')} onClick={() => navigate('/cart')}>장바구니<span>0</span></button>
            </div>
        </header>
    );
}
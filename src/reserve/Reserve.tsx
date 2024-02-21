import React from 'react'
import classNames from 'classnames/bind'
import Button from '../components/button/Button'
import Divider from '../components/divider/Divider'
import CartItem from '../components/cartItem/CartItem'
import ReserveDate from '../components/reserve/ReserveDate'
import ReserveTime from '../components/reserve/ReserveTime'


 import styles from './Reserve.module.css'
const cx = classNames.bind(styles)

const Reserve = () => {
  return (
    <div className={cx('reserve')}>
      <form method='post'>
        <input type='hidden' name='reserve-date' id='reserve-date' value='' />
        <ReserveDate />
        <ReserveTime />
        <Divider space={'25px -20px 0'} />

        <div className={cx('counsel-box')}>
            <input type="checkbox" id="counsel" name="counsel" value="Y" />
            <label htmlFor="counsel">상담이 필요하시면 체크해주세요.</label>
        </div>
        
        <Divider space={'0 -20px'} />

        <div className={cx('surgery-item-box')}>
          <div className={cx('surgery-titlie')}>
            <em>선택 시술</em>
            <button className={cx('open')}>ABCD패키지 외 <b>2</b>건</button>
          </div>

          <div className={cx('surgery-item')}>
            <CartItem />
          </div>

          <Divider space={'0 -20px'} />
        </div>

        <div className={cx('coupon-box')}>
          <div className={cx('title')}>쿠폰</div>
          <button>사용가능 쿠폰 2장</button>
        </div>

        <Divider space={'0 -20px'} />

        <div className={cx('mileage-box')}>
          <div className={cx('title')}>마일리지</div>
          <span>사용가능 마일리지</span>
          <em>50,000</em>

          <div className={cx('input-box')}>
            <input type='number' name='mileage' placeholder='0' />
            <button>모두사용</button>
          </div>
        </div>

        <Divider space={'0 -20px'} />

        <div className={cx('btn-area')}>
          <strong>결제 예상금액</strong>
          <em>(VAT별도)</em>
          <b>99,990,000</b>
          <p className={cx('noti')}>*결제는 내원 시 진행됩니다.</p>
          <Button type="submit" width={'100%'}>예약완료</Button>
        </div>
      </form>

    </div>
  )
}

export default Reserve
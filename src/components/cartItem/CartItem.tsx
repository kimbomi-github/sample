import React from 'react'
import classNames from 'classnames/bind'
import styles from './CartItem.module.css'
const cx = classNames.bind(styles)

const CartItem = () => {
  return (
    <div className={cx('cart-Item')}>
        <div className={cx('item-name')}>
            <input type="checkbox" id="chk_id_0" name="item-name" value="ABCD패키지" />
            <label htmlFor="chk_id_0">ABCD패키지</label>
            <button>삭제</button>
        </div>
        <p className={cx('item-desc')}>올리지오X 300샷 + 리프테라2 펜타입 2000샷 + 스킨보톡스 2부위(턱라인/나비존)</p>
        <div className={cx('item-num')}>잔여/전체 <span><b>2</b><i>/</i>3</span></div>
    </div>
  )
}

export default CartItem
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ReserveTime.module.css'
const cx = classNames.bind(styles)

const ReserveTime = () => {
  return (
    <div className={cx('reserve-time')}>
      
      <p className={cx('time-divider')}>오전</p>
      <div className={cx('radio-box')}>
        <div className={cx('disabled')}>
            <input type="radio" name="opt-date" id="opt-date1" value="10:00" />
            <label htmlFor="opt-date1">10:00</label>
        </div>
        <div className={cx('disabled')}>
            <input type="radio" name="opt-date" id="opt-date2" value="10:30" />
            <label htmlFor="opt-date2">10:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date3" value="11:00" />
            <label htmlFor="opt-date3">11:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date4" value="11:30" />
            <label htmlFor="opt-date4">11:30</label>
        </div>
      </div>
      
      <p className={cx('time-divider')}>오후</p>
      <div className={cx('radio-box')}>
        <div className={cx('disabled')}>
            <input type="radio" name="opt-date" id="opt-date5" value="12:00" />
            <label htmlFor="opt-date5">12:00</label>
        </div>
        <div className={cx('disabled')}>
            <input type="radio" name="opt-date" id="opt-date6" value="12:30" />
            <label htmlFor="opt-date6">12:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date7" value="13:00" />
            <label htmlFor="opt-date7">1:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date8" value="13:30" />
            <label htmlFor="opt-date8">1:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date9" value="14:00" />
            <label htmlFor="opt-date9">2:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date10" value="14:30" />
            <label htmlFor="opt-date10">2:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date11" value="15:00" />
            <label htmlFor="opt-date11">3:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date12" value="15:30" />
            <label htmlFor="opt-date12">3:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date13" value="16:00" />
            <label htmlFor="opt-date13">4:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date14" value="16:30" />
            <label htmlFor="opt-date14">4:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date15" value="17:00" />
            <label htmlFor="opt-date15">5:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date16" value="17:30" />
            <label htmlFor="opt-date16">5:30</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date17" value="18:00" />
            <label htmlFor="opt-date17">6:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date18" value="18:30" />
            <label htmlFor="opt-date18">6:30</label>
        </div>        
        <div>
            <input type="radio" name="opt-date" id="opt-date19" value="19:00" />
            <label htmlFor="opt-date19">7:00</label>
        </div>
        <div>
            <input type="radio" name="opt-date" id="opt-date20" value="19:30" />
            <label htmlFor="opt-date20">7:30</label>
        </div>
      </div>
    </div>
  )
}

export default ReserveTime
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Divider.module.css'
const cx = classNames.bind(styles)

interface IDividerProps {
  space?: string;
  color?: string;
  [x: string]: any;
}

const Divider = ({
  space = '0px',
  color = '#f6f7f9',
  ...restProps
}: IDividerProps) => {

  const style = {
    margin: space,
    background: color
  }

  return (
    <div
      className={cx('divider')}
      style={style}
      {...restProps}
    />
  )
}

export default Divider
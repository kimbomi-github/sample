import React from 'react';
import { Link } from 'react-router-dom'
//import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../components/button/Button'
import Divider from '../components/divider/Divider'
import classNames from 'classnames/bind'
import styles from './SignUp.module.css'
const cx = classNames.bind(styles)

interface FormValues {
    username: string;
    birth: string;
    phone: string;
    chkAll?: boolean;
    agree1?: boolean;
    agree2?: boolean;
    agree3?: boolean;
}

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('이름을 입력해주세요')
        .min(2, '이름은 최소 2자 이상 입력해주세요.'),

    birth: Yup.string()
        .required('생년월일 6자리를 입력해주세요.')
        .max(6, '생년월일은 6자리만 입력해주세요.')
        .matches(/^[0-9]{6}$/i, '생년월일 6자리를 입력해주세요.'),

    phone: Yup.string()
        .matches(/^[0-9]{10}$/i, '휴대폰 번호를 정확히 입력해주세요')
        .required('휴대폰 번호를 입력해주세요'),

    agree1: Yup.bool()
        .oneOf([true], '이용약관에 동의해 주시기 바랍니다.'),

    agree2: Yup.bool()
        .oneOf([true], '개인정보 수집 및 이용에 동의해 주시기 바랍니다.'),
 
});

const Form: React.FC = () => {
 const initialValues: FormValues = {
    username: '',
    birth: '',
    phone: '',    
    chkAll: false,
    agree1: false,
    agree2: false,
    agree3: false,
 };

 const handleSubmit = (values: FormikValues,
  { setSubmitting }: FormikHelpers<FormValues>) => {
  setTimeout(() => {
   console.log(values);
   setSubmitting(false);
  }, 500);
 }

 return (
  <div className={cx('register-form')}>
   <h1>
        고객님 환영합니다!<br />
        내원 이력 관리를 위해<br />
        이름과 전화번호를 입력해주세요
    </h1>
    <Divider />
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
   >
    {({ isSubmitting, errors, handleSubmit }) => (
     <form onSubmit={handleSubmit} autoComplete='off'>
      <label htmlFor="username" className={cx('form-group', { 'error': errors.username })}>
        <label>이름</label>
        <Field
            name="username"
            type="text"
            placeholder="이름을 입력해주세요"
        />
        <ErrorMessage
            className={cx('error')}
            name="username"
            component="div"
        />        
        <span className={cx('noti')}>*한글, 영문 대/소문자를 사용. 특수기호, 공백 사용 불가</span>
      </label>
      <label htmlFor="birth" className={cx('form-group', { 'error': errors.birth })}>
        <label>생년월일</label>
        <Field
            name="birth"
            type="number"
            placeholder="생년월일 6자리를 입력해주세요"
        />
        <ErrorMessage
            className={cx('error')}
            name="birth"
            component="div"
        />
      </label>
      <label htmlFor="phone" className={cx('form-group', { 'error': errors.phone })}>
        <label>핸드폰번호</label>
        <Field
            name="phone"
            type="number"
            placeholder="휴대폰 번호를 입력해주세요"
        />
        <ErrorMessage
            className={cx('error')}
            name="phone"
            component="div"
        />
      </label>

      <Divider space={'0 -20px'} />

      <div className={cx('checkbox-area')}>
        <div className={cx('form-group', 'form-check', 'chk-all')}>
            <div className={cx('form-group')}>
                <Field 
                    id="allCheck"
                    name="chkAll"
                    type="checkbox"
                    className={cx('form-check-input')}
                />               
                <label htmlFor="allCheck">모두 동의합니다.</label>
            </div>
        </div>

        <div className={cx('checkbox-group')}>
            <div className={cx('form-group', 'form-check', { 'error': errors.agree1 })}>
                <Field
                    id="agree1"
                    name="agree1"
                    type="checkbox"
                />               
                <label htmlFor="agree1">[필수] 이용약관</label>
                <Link to="/service">약관보기</Link>
                <ErrorMessage
                    className={cx('error')}
                    name="agree1"
                    component="div"
                /> 
            </div>

            <div className={cx('form-group', 'form-check', { 'error': errors.agree2 })}>
                <Field
                    id="agree2"
                    name="agree2"
                    type="checkbox"
                />               
                <label htmlFor="agree2">[필수] 개인정보 수집 및 이용에 대한 동의</label>
                <Link to="/privacy">약관보기</Link>
                <ErrorMessage
                    className={cx('error')}
                    name="agree2"
                    component="div"
                /> 
            </div>

            <div className={cx('form-group', 'form-check')}>
                <Field                
                    id="agree3"
                    name="agree3"
                    type="checkbox"
                />               
                <label htmlFor="agree3">[선택] 마케팅 활용/광고성 정보 수신 동의모두 동의</label>
                <Link to="/privacy">약관보기</Link>
                <span className={cx('noti')}>다양한 할인 소식 및 혜택 발급 정보를 보내드립니다.</span>
            </div>
        </div>
      </div>

      <div className="btn-area">
        <Button
            type="submit"
            width="100%"
            disabled={isSubmitting}
        >
            확인
        </Button>
      </div>
     </form>
    )}
   </Formik>
  </div>
 );
};

export default Form;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import classNames from 'classnames/bind'
import styles from './auth.module.css'
//import Input from '../components/input/Input'
import Button from '../components/button/Button'
import Divider from '../components/divider/Divider'
const cx = classNames.bind(styles)

type UserSubmitForm = {
  username: string;  
  birth: string;
  phone: string;
  chkAll?: boolean;
  agree1?: boolean;
  agree2?: boolean;
  agree3?: boolean;
};

interface CheckboxItem {
    id: number;
    title: string;
    label: string;
    isChecked: boolean;
}

const Register: React.FC = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .required('이름을 입력해주세요')
        .min(2, '이름은 최소 2자 이상 입력해주세요.'),
        birth: Yup.string()
        .required('생년월일 6자리를 입력해주세요.')
        .max(6, '생년월일은 6자리만 입력해주세요.')
        .matches(/^[0-9]{6}$/i, '생년월일 6자리를 입력해주세요.'),
        phone: Yup.string()
        .matches(/^[0-9]{11}$/i, '휴대폰 번호를 정확히 입력해주세요')
        .required('휴대폰 번호를 입력해주세요'),
        //chkAll: Yup.bool().oneOf([true], '약관 및 정보 이동에 모두 동의해 주시기 바랍니다.'),
        //agree1: Yup.bool().oneOf([true], '약관 및 정보 이동에 모두 동의해 주시기 바랍니다.'),
        agree1: Yup.bool().oneOf([true], '이용약관에 동의해 주시기 바랍니다.'),
        agree2: Yup.bool().oneOf([true], '개인정보 수집 및 이용에 동의해 주시기 바랍니다.'),
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
    
    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };

    const initialItems: CheckboxItem[] = [
        { id: 1, title: 'agree1', label: '[필수] 이용약관', isChecked: false },
        { id: 2, title: 'agree2', label: '[필수] 개인정보 수집 및 이용에 대한 동의', isChecked: false },
        { id: 3, title: 'agree3', label: '[선택] 마케팅 활용/광고성 정보 수신 동의', isChecked: false },
    ];

    const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(initialItems);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const handleCheckboxChange = (id: number) => {
        // const updatedItems = checkboxItems.map(item =>
        //     item.id === id ? { ...item, isChecked: !item.isChecked } : item
        // );

        // setCheckboxItems(updatedItems);
        // setSelectAll(updatedItems.every(item => item.isChecked));
        console.log(id)
    };

    const handleSelectAllChange = () => {
        const updatedItems = checkboxItems.map(item => ({ ...item, isChecked: !selectAll }));
        setCheckboxItems(updatedItems);
        setSelectAll(!selectAll);
    };
    
    return (
        <div className={cx('register-form')}>
            <h1>
                고객님 환영합니다!<br />
                내원 이력 관리를 위해<br />
                이름과 전화번호를 입력해주세요
            </h1>
            <Divider />

            <form method="post" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form-group', { 'is-invalid': errors.username })}>
                    <label>이름</label>
                    <input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        {...register('username')}
                        className={cx('form-control')}
                    />
                    <p className={cx('noti')}>*한글, 영문 대/소문자를 사용. 특수기호, 공백 사용 불가</p>
                    <div className={cx('invalid-feedback')}>{errors.username?.message}</div>
                </div>
        
                <div className={cx('form-group', { 'is-invalid': errors.birth })}>
                    <label>생년월일</label>
                    <input
                        type="number"
                        placeholder="생년월일 6자리를 입력해주세요"
                        {...register('birth')}
                    />
                    <div className={cx('invalid-feedback')}>{errors.birth?.message}</div>
                </div>

                <div className={cx('form-group', { 'is-invalid': errors.phone })}>
                    <label>핸드폰번호</label>
                    <input
                        type="number"
                        placeholder="휴대폰 번호를 입력해주세요"
                        {...register('phone')}
                    />
                    <div className={cx('invalid-feedback')}>{errors.phone?.message}</div>
                </div>
        
                {/* <div className="form-group form-check">
                    <input
                        type="checkbox"
                        {...register('acceptTerms')}
                        className={`form-check-input ${
                        errors.acceptTerms ? 'is-invalid' : ''
                        }`}
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                        I have read and agree to the Terms
                    </label>
                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                </div> */}

                <Divider space={'0 -20px'} />

                <div className={cx('checkbox-area')}>
                    <div className={cx('form-group', 'form-check', 'chk-all')}>
                        <input
                            id="chkAll"
                            type="checkbox"
                            {...register('chkAll')}
                            className={cx('form-check-input')}
                            checked={selectAll} 
                            onChange={handleSelectAllChange}
                        />
                        <label htmlFor="chkAll" className={cx('form-check-label')}>
                            모두 동의합니다.
                        </label>
                    </div>

                    <div className={cx('checkbox-group')}>
                        <div className={cx('form-group', 'form-check', { 'is-invalid': errors.agree1 })}>
                            <input
                                id="agree1"
                                type="checkbox"
                                {...register('agree1')}
                                className={cx('form-check-input', { 'is-invalid': errors.agree1 })}
                            />
                            <label htmlFor="agree1" className={cx('form-check-label')}>
                                [필수] 이용약관
                            </label>                            
                            <Link to="/service">약관보기</Link>
                            <div className={cx('invalid-feedback')}>{errors.agree1?.message}</div>
                        </div>
                        <div className={cx('form-group', 'form-check', { 'is-invalid': errors.agree2 })}>
                            <input
                                id="agree2"
                                type="checkbox"
                                {...register('agree2')}
                                className={cx('form-check-input', { 'is-invalid': errors.agree2 })}
                            />
                            <label htmlFor="agree2" className={cx('form-check-label')}>
                                [필수] 개인정보 수집 및 이용에 대한 동의
                            </label>
                            <Link to="/privacy">약관보기</Link>
                            <div className={cx('invalid-feedback')}>{errors.agree2?.message}</div>
                        </div>                        
                        <div className={cx('form-group', 'form-check')}>
                            <input
                                id="agree3"
                                type="checkbox"
                                {...register('agree3')}
                                className={cx('form-check-input')}
                            />
                            <label htmlFor="agree3" className={cx('form-check-label')}>
                                [선택] 마케팅 활용/광고성 정보 수신 동의모두 동의
                            </label>                            
                            <Link to="/privacy">약관보기</Link>
                            <p className={cx('noti')}>다양한 할인 소식 및 혜택 발급 정보를 보내드립니다.</p>
                        </div>
                        {/* 

                        

                        <div className={cx('form-group', 'form-check')}>
                            <input
                                id="agree3"
                                type="checkbox"
                                {...register('agree3')}
                                className={cx('form-check-input')}
                            />
                            <label htmlFor="agree3" className={cx('form-check-label')}>
                                [선택] 마케팅 활용/광고성 정보 수신 동의모두 동의
                            </label>
                            <p className={cx('noti')}>다양한 할인 소식 및 혜택 발급 정보를 보내드립니다.</p>
                        </div> */}
                    </div>
                </div>
        
                <div className="btn-area">
                    {/* <Button type="submit">확인</Button> */}
                    <Button
                        type="submit"
                        width="100%"
                    >
                        확인
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Register;
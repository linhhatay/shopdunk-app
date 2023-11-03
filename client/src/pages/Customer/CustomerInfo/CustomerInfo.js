import classNames from 'classnames/bind';
import styles from './CustomerInfo.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { changePassword } from '~/store/actions/authAction';

const cx = classNames.bind(styles);

function CustomerInfo() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState, getValues, reset } = useForm();
    const { errors } = formState;

    function onSubmit(data) {
        dispatch(changePassword(data));
    }

    console.log(errors);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('sidebar')}>
                    <div className={cx('sidebar-menu')}>
                        <div className={cx('listbox')}>
                            <ul>
                                <li className={cx('customer-info')}>
                                    <Link to="/">Thông tin tài khoản</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div>
                        <div className={cx('content-inner')}>
                            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                                <div className={cx('fieldset')}>
                                    <label className={cx('note')}>
                                        {' '}
                                        Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các ký tự đặc biệt
                                    </label>
                                    <div className={cx('form-fields')}>
                                        <div className={cx('inputs')}>
                                            <label>Mật khẩu cũ:</label>
                                            <input
                                                type="password"
                                                name="passwordCurrent"
                                                {...register('passwordCurrent', {
                                                    required: 'This field is required',
                                                })}
                                            />
                                            {errors?.passwordCurrent && (
                                                <span className={cx('field-validation-error')}>
                                                    <span>{errors?.passwordCurrent?.message}</span>
                                                </span>
                                            )}
                                        </div>
                                        <div className={cx('inputs')}>
                                            <label>Mật khẩu mới:</label>
                                            <input
                                                type="password"
                                                name="password"
                                                {...register('password', {
                                                    required: 'This field is required',
                                                    minLength: {
                                                        value: 8,
                                                        message:
                                                            ' Phải có ít nhất 8 ký tự trong đó có đặc biệt (ví dụ: #?!@$%^&*-)',
                                                    },
                                                })}
                                            />
                                            {errors?.password && (
                                                <span className={cx('field-validation-error')}>
                                                    <span>{errors?.password?.message}</span>
                                                </span>
                                            )}
                                        </div>
                                        <div className={cx('inputs')}>
                                            <label>Xác nhận mật khẩu:</label>
                                            <input
                                                type="password"
                                                name="passwordConfirm"
                                                {...register('passwordConfirm', {
                                                    required: 'This field is required',
                                                    validate: (value) =>
                                                        getValues().password === value ||
                                                        'Mật khẩu mới và mật khẩu xác nhận không khớp.',
                                                })}
                                            />
                                            {errors?.passwordConfirm && (
                                                <span className={cx('field-validation-error')}>
                                                    <span>{errors?.passwordConfirm?.message}</span>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('button')}>
                                    <button type="submit">Đổi mật khẩu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerInfo;

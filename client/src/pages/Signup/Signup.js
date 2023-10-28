import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register as registerApi } from '~/store/actions/authAction';

const cx = classNames.bind(styles);

function Signup() {
    const dispatch = useDispatch();
    const formFields = [
        { name: 'name', label: 'Mã giới thiệu:', type: 'text' },
        { name: 'email', label: 'Tên, Họ:', type: 'text' },
        { name: 'email', label: 'Email:', type: 'text' },
        { name: 'phone', label: 'Điện thoại', type: 'text' },
        { name: 'phone', label: 'Username:', type: 'text' },
        { name: 'password', label: 'Mật khẩu:', type: 'password' },
        { name: 'passwordConfirm', label: 'Xác nhận mật khẩu:', type: 'password' },
    ];

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;
    console.log(errors);

    function onSubmit(data) {
        dispatch(registerApi(data));
    }

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb />
            <div className={cx('content')}>
                <div>
                    <div className={cx('content-inner')}>
                        <div className={cx('banner')}>
                            <div>
                                <p>
                                    <img
                                        src="https://shopdunk.com/images/uploaded/banner/TND_M402_010%201.jpeg"
                                        alt="singup-banner"
                                        width={793}
                                        height={467}
                                    />
                                </p>
                            </div>
                        </div>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('fieldset')}>
                                <div className={cx('form-title')}>
                                    <h1>Đăng ký</h1>
                                </div>
                                <div className={cx('form-fields')}>
                                    <div className={cx('form-group')}>
                                        <label>Mã giới thiệu:</label>
                                        <input className="username" autoFocus="" type="text" name="code" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Tên, Họ:</label>
                                        <input
                                            className="fullName"
                                            autoFocus=""
                                            type="text"
                                            name="fullName"
                                            {...register('fullName', { required: 'Trường bắt buộc.' })}
                                        />
                                        {errors?.fullName && (
                                            <span className={cx('field-validation-error')}>
                                                <span>{errors?.fullName?.message}</span>
                                            </span>
                                        )}
                                    </div>
                                    <div className={cx(['form-group', 'gender'])}>
                                        <label>Giới tính:</label>
                                        <div>
                                            <span className={cx('gender-male')}>
                                                <input
                                                    type="radio"
                                                    value="male"
                                                    name="gender"
                                                    {...register('gender', { required: 'Trường bắt buộc.' })}
                                                />
                                                <label>Nam</label>
                                            </span>
                                            <span className={cx('gender-female')}>
                                                <input
                                                    type="radio"
                                                    value="female"
                                                    name="gender"
                                                    {...register('gender', { required: 'Trường bắt buộc.' })}
                                                />
                                                <label>Nữ</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cx(['form-group', 'date-of-birth'])}>
                                        <label>Ngày sinh:</label>
                                        <div className={cx('date-picker-wrapper')}>
                                            <select name="DateOfBirthDay">
                                                <option>Ngày</option>
                                                <option>1</option>
                                            </select>
                                            <select name="DateOfBirthMonth">
                                                <option>Tháng</option>
                                                <option>1</option>
                                            </select>
                                            <select name="DateOfBirthYear">
                                                <option>Năm</option>
                                                <option>2023</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>E-mail:</label>
                                        <input
                                            className="username"
                                            autoFocus=""
                                            type="text"
                                            name="email"
                                            {...register('email', { required: 'Trường bắt buộc.' })}
                                        />
                                        {errors?.email && (
                                            <span className={cx('field-validation-error')}>
                                                <span>{errors?.email?.message}</span>
                                            </span>
                                        )}
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Điện thoại:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="text"
                                            name="phoneNumber"
                                            {...register('phoneNumber', { required: 'Trường bắt buộc.' })}
                                        />
                                        {errors?.phone && (
                                            <span className={cx('field-validation-error')}>
                                                <span>{errors?.phone?.message}</span>
                                            </span>
                                        )}
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Username:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="text"
                                            name="username"
                                            {...register('username', { required: 'Trường bắt buộc.' })}
                                        />
                                        {errors?.username && (
                                            <span className={cx('field-validation-error')}>
                                                <span>{errors?.username?.message}</span>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fieldset')}>
                                <div className={cx('form-fields')}>
                                    <div className={cx('form-group')}>
                                        <label>Mật khẩu:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="password"
                                            name="password"
                                            {...register('password', { required: 'Yêu cầu mật khẩu.' })}
                                        />
                                        {errors?.password && (
                                            <span className={cx('field-validation-error')}>
                                                <span>{errors?.password?.message}</span>
                                            </span>
                                        )}
                                    </div>
                                    <label className={cx('note')}>
                                        {' '}
                                        Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các ký tự đặc biệt{' '}
                                    </label>
                                    <div className={cx('form-group')}>
                                        <label>Xác nhận mật khẩu:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="password"
                                            name="passwordConfirm"
                                            {...register('passwordConfirm', {
                                                required: 'Yêu cầu mật khẩu.',
                                                validate: (value) =>
                                                    getValues().password === value ||
                                                    'Mật khẩu và mật khẩu xác nhận không khớp.',
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
                            <div className={cx('btn')}>
                                <button type="submit">Đăng ký</button>
                            </div>
                            <div className={cx('btn-login')}>
                                <label> Bạn đã có tài khoản? </label>
                                <button>Đăng nhập ngay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

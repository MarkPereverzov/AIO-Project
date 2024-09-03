import { Header, Information, MiniCalendar, AchivementsBar} from '../../widgets'
import "./Profile.css"

export default function Profile() {
    return (
    <>
        <div className="main">
            <div className="profile-container a-container" id="a-container">
                <form className="form" id="a-form" method="" action="">
                    <h2 className="form_title title">Регистрация</h2>
                    <div className="form__icons">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
                    </div>
                    <span className="form__span">Использовать сервисы для регистрации</span>
                    <input className="form__input" type="text" placeholder="Name"/>
                    <input className="form__input" type="text" placeholder="Email"/>
                    <input className="form__input" type="password" placeholder="Password"/>
                    <button className="form__button button submit">Регистрация</button>
                </form>
            </div>

            <div className="profile-container b-container" id="b-container">
                <form className="form" id="b-form" method="" action="">
                    <h2 className="form_title title">Вход</h2>
                    <div className="form__icons">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
                    </div>
                    <span className="form__span">Использовать сервисы для входа</span>
                    <input className="form__input" type="text" placeholder="Email"/>
                    <input className="form__input" type="password" placeholder="Password"/>
                    <a className="form__link">Забыли пароль?</a>
                    <button className="form__button button submit">Войти</button>
                </form>
            </div>
            
            <div className="switch" id="switch-cnt">
                <div className="switch__circle"></div>
                <div className="switch__circle switch__circle--t"></div>

                <div className="switch__container" id="switch-c1">
                    <h2 className="switch__title title">Вход</h2>
                    <p className="switch__description description">Если у вас уже есть учетная запись, пожалуйста, войдите.</p>
                    <button className="switch__button button switch-btn">Войти</button>
                </div>

                <div className="switch__container is-hidden" id="switch-c2">
                    <h2 className="switch__title title">Регистрация</h2>
                    <p className="switch__description description">Если у вас еще нет учетной записи, вы можете зарегистрироваться.</p>
                    <button className="switch__button button switch-btn">Регистрация</button>
                </div>
            </div>
        </div>
    </>
    );
}
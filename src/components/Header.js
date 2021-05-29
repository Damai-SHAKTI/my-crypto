import PropTypes from 'prop-types';

export default function Header({ Title, Themes, dropDownBtnText, getTheme, setTheme }) {

    const changeTheme = (text) => {
        if (text === dropDownBtnText) {
            return
        }
        setTheme(text.toLowerCase());
    }

    return (
        <nav className={getTheme === Themes[1].color ? HeaderTheme.dark : getTheme === Themes[0].color ? HeaderTheme.light : HeaderTheme.blue}>
            <div className="container-fluid">
                <h4 className="navbar-brand">{Title}</h4>
                <div className="dropdown dropstart">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {dropDownBtnText}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                        {
                            Themes.map((theme) => (
                                <li key={theme.id}><button onClick={() => {changeTheme(theme.color.toUpperCase())}} className="dropdown-item">{theme.color}</button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    Title: 'Navbar',
}

Header.propTypes = {
    Title: PropTypes.string,
}

const HeaderTheme = {
    dark : 'navbar navbar-dark bg-dark',
    light: 'navbar navbar-light bg-light',
    blue: 'navbar navbar-dark bg-primary',
}

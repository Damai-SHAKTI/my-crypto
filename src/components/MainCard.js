import TextField from './TextField';
import { useState } from 'react';

export default function MainCard({ getTheme, Themes, Algorithms, getAlgorithm, setAlgorithm }) {

    const [screensize, setScreensize] = useState(window.innerWidth);
    window.onresize = () => setScreensize(window.innerWidth);

    const DeviceVersion = () => {
        if (screensize <= 1336) {
            return maincontainerStyleMobileAndTablet;
        }
        else {
            return maincontainerStyle;
        }
    }

    const SetAlgorithm = (text) => {
        setAlgorithm(text);
    }

    return (
        <div style={DeviceVersion()}>
            <div className={getTheme === Themes[1].color ? cardTheme.dark : getTheme === Themes[0].color ? cardTheme.light : cardTheme.blue}>
                <div className="card-header h2">Encryption/Encoding Type:
                    <div className="dropdown dropstart" style={dropdownStyle}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {getAlgorithm}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            {
                                Algorithms.map((algorithm) => (
                                    <li key={algorithm.id}><button onClick={() => SetAlgorithm(algorithm.name)} className="dropdown-item">{algorithm.name}</button></li>    
                                ))                     
                            }
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <TextField buttonText="Encode" getTheme={getTheme} Themes={Themes} getAlgorithm={getAlgorithm}/>
                    <TextField buttonText="Decode" getTheme={getTheme} Themes={Themes} getAlgorithm={getAlgorithm}/>
                </div>
            </div>
        </div>
    );
}

const dropdownStyle = {
    float: 'right',
}

const maincontainerStyle = {
    width: '50%',
    margin: 'auto',
    marginTop: '10px',
}

const maincontainerStyleMobileAndTablet = {
    width: '98%',
    margin: 'auto',
    marginTop: '10px',
}

const cardTheme = {
    dark: 'card text-white bg-dark',
    light: 'card text-dark bg-light',
    blue: 'card text-white bg-primary',
}
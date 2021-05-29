import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';
import CryptoJS from 'crypto-js';

export default function TextField({ buttonText, getTheme, Themes, getAlgorithm }) {

    const CopyToClipboard = (textareaid) => {
        document.getElementById(textareaid).select();
        document.execCommand("copy");
    }

    const ClearTextArea = (textareaid) => {
        document.getElementById(textareaid).value = null;
    }

    const ED = (textareaid) => {
        let text = document.getElementById(textareaid).value;
        if (getAlgorithm === "base64"){
            if (textareaid === "Decode" ){
                document.getElementById("Encode").value =  Base64.decode(text)
            }
            else {
                document.getElementById("Decode").value = Base64.encode(text)
            }
        }
        else if (getAlgorithm === "md5"){
            if (textareaid === "Decode" ){
                window.alert("Cannot decode md5 because it's a one way function.")
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.MD5(text)
            }
        }
        else if (getAlgorithm === "sha1"){
            if (textareaid === "Decode" ){
                window.alert("Cannot decode sha1 because it's a one way function.")
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.SHA1(text)
            }
        }
        else if (getAlgorithm === "sha256"){
            if (textareaid === "Decode" ){
                window.alert("Cannot decode sha256 because it's a one way function.")
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.SHA256(text)
            }
        }
        else if (getAlgorithm === "aes"){
            if (textareaid === "Decode" ){
                document.getElementById("Encode").value =  CryptoJS.AES.decrypt(text, "").toString(CryptoJS.enc.Utf8)
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.AES.encrypt(text, "").toString()
            }
        }
        else if (getAlgorithm === "des"){
            if (textareaid === "Decode" ){
                document.getElementById("Encode").value =  CryptoJS.DES.decrypt(text, "").toString(CryptoJS.enc.Utf8)
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.DES.encrypt(text, "").toString()
            }
        }
        else if (getAlgorithm === "rabbit"){
            if (textareaid === "Decode" ){
                document.getElementById("Encode").value =  CryptoJS.Rabbit.decrypt(text, "").toString(CryptoJS.enc.Utf8)
            }
            else {
                document.getElementById("Decode").value =  CryptoJS.Rabbit.encrypt(text, "").toString()
            }
        }

    }

    return (
        <>
        <div className="form-group">
            <label htmlFor={buttonText}>Example textarea: </label>
            <textarea style={getTheme === Themes[0].color ? textareaStyle[1] : textareaStyle[0]} className="form-control" id={buttonText} rows="8" placeholder="Enter Here"></textarea>
        </div>
        <div style={buttondivStyle}>
            <button onClick={() => ED(buttonText)} type="button" className="btn btn-success" style={buttonStyle}>{buttonText}</button>
            <button onClick={() => ClearTextArea(buttonText)} type="button" className="btn btn-danger" style={buttonStyle}>Clear</button>
            <button onClick={() => CopyToClipboard(buttonText)} type="button" className="btn btn-light" style={buttonStyle}><i className="bi bi-clipboard"></i> Copy to clipboard</button>
        </div>
        </>
    );
}

TextField.propTypes = {
    buttonText: PropTypes.string.isRequired,
}

const textareaStyle = [
    {
        color: 'white',
        background: '#161a1d', //dark
    },
    {
        color: 'black',
        background: 'white', //light
    }
]

const buttondivStyle = {
    marginTop: '10px',
    alignItems: 'center',
}

const buttonStyle = {
    margin: '5px',
    border: '1px solid rgba(0,0,0,.125)',
}

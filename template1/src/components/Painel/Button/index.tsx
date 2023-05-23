import {Link} from "react-router-dom"

function Button() {
    return (
        <Link to={'/contato'} className="w3-button w3-round-large w3-padding w3-light-grey w3-block" style={{ fontSize: 18, textDecoration:'none' }}>
            <i className="fa fa-check" style={{ fontSize: 22 }}></i> Consulte agora!
        </Link>
    )
}

export default Button
import {Link} from 'react-router-dom';
import '../css/header.css';

function Header(props) {
  return (
    <div id="header">
      <div id="wrap">
        <div id="logo">
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
            Logo
          </Link>
        </div>
        <div id="contentsWrap">
          <div id="roulette">
            <Link
              to="/Roulette"
              style={{textDecoration: 'none', color: 'black'}}
            >
              Roulette
            </Link>
          </div>
          <div id="record">
            <Link to="/Record" style={{textDecoration: 'none', color: 'black'}}>
              Record
            </Link>
          </div>
          <div id="loginState">login{props.loginState}</div>
        </div>
      </div>
      <div id="myPage">
        <Link to="/myPage" style={{textDecoration: 'none', color: 'black'}}>
          마이페이지
        </Link>
      </div>
    </div>
  );
}

export default Header;

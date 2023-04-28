import '../css/header.css';

function Header(props) {
  return (
    <div id="header">
      <div id="wrap">
        <div id="logo">Logo</div>
        <div id="contentsWrap">
          <div id="roulette">Roulette</div>
          <div id="record">Record</div>
          <div id="loginState">login{props.loginState}</div>
        </div>
      </div>
      <div id="myPage">마이페이지</div>
    </div>
  );
}

export default Header;

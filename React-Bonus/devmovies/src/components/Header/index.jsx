import Logo from './../../assets/logo.png'

function Header(){
    return(
        <header>
            <img src={Logo} style={{ width: 500 }}/>
        </header>
    )
}

export default Header
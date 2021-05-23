const Header = () => {

    const imgUrl = "https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png";
    return(
        <div className='header'>        
            <a href='/'>
                <img id='logo' src={imgUrl} alt='pokemon logo' width='130' height='53' />
            </a>           
            <input type="text" placeholder="Search.." />
        </div>
    );
}

export default Header;
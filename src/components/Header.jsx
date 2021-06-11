const Header = (props) => {

    const imgUrl = "https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png";

    const handleChange = event => {
        props.changeSearch(event.target.value);
    }

    return(
        <div className='header'>        
            <a href='/'>
                <img id='logo' src={imgUrl} alt='pokemon logo' width='130' height='53'/>
            </a>           
            <input type="text" placeholder="Search.." onChange={handleChange}/>
        </div>
    );
}

export default Header;
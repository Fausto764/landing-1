import './Header.css'


export function Header (){
    return(
        <header className="header">    
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8dc5431091769.5640f77be5837.png" className="header__img" />
            <h1 className="header__h1">SHOCK</h1>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li"><a className='header__a'>Shop</a></li>
                    <li className="header__li"><a className='header__a'>Look book</a></li>
                    <li className="header__li"><a className='header__a'>Our story</a></li>
                </ul>
            </nav>
            <h3 className='header__h3'>cart(0)</h3>
            <button className='header__button'> <img src="./src/luna.svg"/></button>
        </header>
    )
}
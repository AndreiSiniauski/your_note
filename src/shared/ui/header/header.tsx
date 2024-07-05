import { FC } from 'react';
import './header.css'

interface IHeaderProps {
    username: string;
}

const Header: FC<IHeaderProps> = ({username}) => {
    return (
        <header className='header'>
            <p>Добро пожаловать, <strong>{username || 'гость'}</strong>!</p>
        </header>
    )
}

export default Header;
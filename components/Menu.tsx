import Link from 'next/link'
import MenuCSS from './Menu.module.scss'

function Menu() {
    return (
        <ul className={MenuCSS.menu}>
            <li>
                <Link href='/about' as={`/about`}>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/products' as={`/products`}>
                    <a>Products</a>
                </Link>
            </li>
            <li>
                <Link href='/' as={`/`}>
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    )
}

export default Menu

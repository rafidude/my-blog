import Link from 'next/link'
import Layout from '../../components/Layout'

function Products() {
    return (
        <Layout>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link
                        href='/products/[category]'
                        as={`/products/category1`}>
                        category1
                    </Link>
                </li>
                <li>
                    <Link
                        href='/products/[category]'
                        as={`/products/category2`}>
                        category2
                    </Link>
                </li>
                <li>
                    <Link
                        href='/products/[category]'
                        as={`/products/category3`}>
                        category3
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Products

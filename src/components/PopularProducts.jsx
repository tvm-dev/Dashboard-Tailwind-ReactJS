import React from 'react'
import { Link } from 'react-router-dom'

//Dummy Products Data:
const popularProductsData = [
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://source.unslash.com/100x100?macbook',
        productPrice: '$ 1488.00',
        productStock: 332
    },
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://unsplash.com/s/photos/random',
        productPrice: '$ 199.00',
        productStock: 141
    },
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://unsplash.com/s/photos/random',
        productPrice: '$ 149.00',
        productStock: 323
    },
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://unsplash.com/s/photos/random',
        productPrice: '$ 277.00',
        productStock: 0
    },
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://unsplash.com/s/photos/random',
        productPrice: '$ 781.00',
        productStock: 123
    },
    {
        id: '3432',
        productName: 'Macbook M1 Pro 14',
        productThumbnail: 'https://unsplash.com/s/photos/random',
        productPrice: '$ 1499.00',
        productStock: 0
    }
]

function PopularProducts() {
    return (
        <div className="bg-white px-4 pt-3 rounded-sm border border-gray-200 w-[20rem]">
            <strong className="text-gray-700 font-medium">Popular Products</strong>
            <div className="mt-4 flex flex-col gap-3">
                {popularProductsData.map((product) => (
                    <Link key={product.id} to={`/product/$product.id`} className="flex hover:no-underline">
                        <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-md overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={product.productThumbnail}
                                alt={product.productName}
                            />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-gray-800">{product.productName}</p>
                            <span
                                className={`text-sm font-medium ${product.productStock === 0 ? 'text-orange-400' : 'text-green-400'}`}
                            >
                                {product.productStock === 0 ? 'Out of stock' : product.productStock + ' in stock'}
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 pl-2">{product.productPrice}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default PopularProducts

import React from 'react'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import product13 from '../assets/product13.png'
const categories = [
    { img: product8, alt: "Men's Perfumes", title: "Men's Collection", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
    { img: product9, alt: "Women's Perfumes", title: "Women's Collection", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
    { img: product10, alt: "Luxury Perfumes", title: "Luxury Collection", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
    { img: product11, alt: "Unisex Perfumes", title: "Unisex Perfumes", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
    { img: product12, alt: "Arabic Quad", title: "Arabic Quad", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
    { img: product13, alt: "Gift Sets", title: "Gift Packages", description: "ipsum dolor sit amet consectetur, adipisicing elit." },
]
const Categories = () => {

    return (
        <section id='categories' className='py-16 scrol-mt-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-amber-950 mb-3'>
                        Explore Our Fragrance Colections
                    </h2>
                    <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    {categories.map((category, index) => (
                        <div key={index} className='relative group overflow-hidden rounded-lg shadow-md  hover:shadow-lg transition'>
                            <div className='h-64 overflow-hidden'>
                                <img src={category.img} alt={category.alt} className='w-full h-full objetc-cover group-hover:scale-105 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                                <div className='absolute bottom-0 left-0 p-6'>
                                    <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                                    <p className='text-gray-200 mt-1'>{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories

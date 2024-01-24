import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '../ui/Button';


function ProductList() {
    const products = [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: '$48',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: '$89',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
      ]

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 mt-2">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((prod)=> 
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt={prod.name}
          className="object-cover w-full h-64"
          height={400}
          src={prod.imageSrc}
          style={{
            aspectRatio: "500/400",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="bg-white p-4 dark:bg-white-950">
          <h3 className="font-semibold text-lg">{prod.name}</h3>
          <h4 className="font-semibold text-lg md:text-xl">{prod.price}</h4>
          <Button className="mt-2" size="sm">
            Add to cart
          </Button>
        </div>
      </div>
      )}
      
    </div>
  </main>
  )
}

export default ProductList
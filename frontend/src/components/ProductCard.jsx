import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { title, slug, image, price, category } = product.fields;
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    const updatedLike = !like;
    setLike(updatedLike);
    localStorage.setItem(`liked_${slug}`, updatedLike.toString());
  };

  useEffect(() => {
    const likedState = localStorage.getItem(`liked_${slug}`);
    if (likedState) {
      setLike(likedState === 'true');
    }
  }, [slug]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div key={product.id} className="group relative">
          <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
            <Image
              src={"https:" + image[0].fields.file.url}
              layout="fill"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 text-base font-semibold text-gray-900">
            <a href={"/products/" + slug}>
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <h4 className="mt-1 text-sm text-gray-500">Category: {category}</h4>
          <p className="mt-1 text-sm text-gray-500">{price} Kr</p>
          <p onClick={toggleLike}>
            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
          </p>
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

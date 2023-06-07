import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { title, slug, image, price, category } = product.fields;
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  function handleAddToCart() {
    setIsAddingToCart(true);
  
    // Simulate an asynchronous request to a server
    setTimeout(() => {
      setIsAddingToCart(false);
      alert('Product added to cart!');
    }, 1000);
  }
  

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
          
        </div>
        <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? 'Adding to cart...' : 'Add to cart'}
                </button>
      </div>
    </div>
  );
};
export default ProductCard;


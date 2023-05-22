import Image from "next/image"

 const ProductCard = ({product}) => {
  const {title, slug, image, price, description, category}= product.fields 

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  src={'https:'+ image[0].fields.file.url}
                  layout="fill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={'/products/'+ slug}>
                  <span className="absolute inset-0" />
                  {title}
                </a>
              </h3>
              <h4 className="mt-1 text-sm text-gray-500">Category: {category}</h4>
              <p className="mt-1 text-sm text-gray-500">{price} Kr</p>
            </div>
        
        </div>
        </div>
        
    
  )
}
export default ProductCard

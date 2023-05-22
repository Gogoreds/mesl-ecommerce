import Image from "next/image"

 const ProductCard = ({product}) => {
  const {title, slug, image, description}= product.fields 

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Shop
          </h2>
          <a
            href="/"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Back to home
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
       
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  src={'https:'+ image[0].fields.file.url}
                  layout="fill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={'/products'+ slug}>
                  <span className="absolute inset-0" />
                  {title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500"></p>
            </div>
        
        </div>
        </div>
        </div>
    
  )
}
export default ProductCard

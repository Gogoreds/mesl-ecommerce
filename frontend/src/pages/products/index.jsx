import {createClient} from 'contentful'
import ProductCard from '../../components/ProductCard'


//connection to contentful
export async function getStaticProps(){
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
  const res= await client.getEntries({content_type: 'product'})
  return {
    props: {
      products: res.items
    }
  }
}


const ProductList = ({products}) => {
 console.log(products)
  return (
    
   <div className='bg-white'>
      <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight mx-10 mt-12 text-gray-900">
            Our Shop
          </h2>
          <a
            href="/"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 mx-10 sm:block"
          >
            Back to home
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> 
    <div className="mt-0 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
    {products.map(product=>(
      <ProductCard key={product.sys.id} product={product} />
      
    ))}
    </div> 
    </div> 

    
    );
}
 
export default ProductList;

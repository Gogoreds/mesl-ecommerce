import {createClient} from 'contentful'
import ProductCard from '../components/ProductCard'


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
    {products.map(product=>(
      <ProductCard key={product.sys.id} product={product} />
    ))}
    </div> 
    );
}
 
export default ProductList;

  import {createClient} from 'contentful'
  import React from "react";
  import Head from "next/head";
  import Image from "next/image"
 // import { ProductPage } from "../../components/ProductPage";

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
    export const getStaticPaths = async ()=>{
      const res = await client.getEntries({
        content_type: 'product'
      })
      const paths = res.items.map(item =>{
        return {
        params: {slug: item.fields.slug}
        }
      })
      return {
        paths,
        fallback: false
      }
    }
    export async function getStaticProps({params}){
         try { 
          const {items} = await client.getEntries({
          content_type: 'product',
          'fields.slug': params.slug
        })
        return{
          props:{
            product: items[0]
          }
          
        } 
    } catch (error) {
      console.error(error);
      return {
        props: {
          product: null 
        }
      };
    }
  }
  
  
  const Details = ({product}) => {
    const {title, image, price, description, category}= product.fields 

    console.log(product)

    return (
      <div className="">
        <Head>
          <title>MESL - Only Clothing Store You'll Ever Need!</title>
          <meta
            name="description"
            content="We strive to provide the best quality clothing to our clients."
          />
        </Head>
    
        <main>
          {/* <ProductPage key={product.sys.id} product={product} /> */}
          <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  src={'https:'+ image[0].fields.file.url}
                  layout="fill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  {title}
              </h3>
              <h4 className="mt-1 text-sm text-gray-500">Category: {category}</h4>
              <p className="mt-1 text-sm text-gray-500">{price} Kr</p>
            </div>
        
        </div>
        </div>
        </main>
   
      </div>
    );
  }
 
export default Details;
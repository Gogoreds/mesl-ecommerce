  import {createClient} from 'contentful'
  import React from "react";
  import Head from "next/head";
  import { ProductPage } from "../../components/ProductPage";

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
    export const getStaticPaths = async ()=>{
      const respone = await client.getEntries({
        content_type: 'product'
      })
      const paths = respone.items.map(item =>{
        params: {slug: item.fields.slug}
      })
      return {
        paths,
        fallback: false
      }
    }
    export async function getStaticProps({params}){
         try { 
          const response = await client.getEntries({
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
    const {title, slug, image, price, description}= product.fields 
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
          <ProductPage key={product.sys.id} product={product} />
        </main>
   
      </div>
    );
  }
 
export default Details;
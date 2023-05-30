import { createClient } from "contentful";
import React from "react";
import ProductCard  from "../../components/ProductCard";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product",
  });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const { items } = await client.getEntries({
      content_type: "product",
      "fields.slug": params.slug,
    });
    return {
      props: {
        product: items[0],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: null,
      },
    };
  }
};

const Details = ({ product }) => {
  const { description } = product.fields;

  console.log(product);

  const renderDescription = () => {
    if (description && description.content && description.content.length > 0) {
      return description.content.map((item, index) => {
        if (item.nodeType === "paragraph") {
          return <p key={index}>{item.content[0].value}</p>;
        } else if (item.nodeType === "embedded-asset-block") {
          const { title, description, file } = item.data.target.fields;
          const imageUrl = file.url;
      
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  return (
       <div className="bg-white">
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <main>
              {renderDescription()}
              <ProductCard key={product.sys.id} product={product} />
  
      </main>
    </div>
    </div>
  );
};

export default Details;

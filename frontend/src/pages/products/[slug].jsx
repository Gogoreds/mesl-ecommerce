import { createClient } from "contentful";
import React from "react";

import Image from "next/image";
import { ProductPage } from "../../components/ProductPage";

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
  const { title, image, price, description, category } = product.fields;

  console.log(product);

  const renderDescription = () => {
    if (description && description.content && description.content.length > 0) {
      return description.content.map((item, index) => {
        if (item.nodeType === "paragraph") {
          return <p key={index}>{item.content[0].value}</p>;
        } else if (item.nodeType === "embedded-asset-block") {
          const { title, description, file } = item.data.target.fields;
          const imageUrl = file.url;
          return (
            <div key={index}>
              <h4>{title}</h4>
              <p>{description}</p>
              <Image
                src={"https:" + imageUrl}
                alt={title}
                width={300}
                height={200}
              />
            </div>
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  return (
    <div className="">
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div>
              <a
                href="/products"
                className="mx-10 hidden text-sm  font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Back to all products
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  src={"https:" + image[0].fields.file.url}
                  layout="fill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {title}
              </h3>
              <h4 className="mt-1 text-sm text-gray-500">
                Category: {category}
              </h4>
              <p className="mt-1 text-sm text-gray-500">{price} Kr</p>
              {renderDescription()}
              <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
            </div>
          </div>
        </div>
      </main>
      {/* <ProductPage key={product.sys.id} product={product} /> */}
    </div>
  );
};

export default Details;

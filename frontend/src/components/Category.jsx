import Image from "next/image";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: "category" });
  return {
    props: {
      category: res.items,
    },
  };
}

const Category = ({ category }) => {
  if (!category || !category.length) {
    return null;
  }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Rest of your code */}
       <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <a
            href="/products"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          {category.slice(0, 3).map((cat) => {
            const { image } = cat.fields;

            const imageUrl = Array.isArray(image)
              ? "https:" + image[0].fields.file.url
              : "https:" + image.fields.file.url;

            return (
              <div
                key={cat.sys.id}
                className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
              >
                <Image
                  src={imageUrl}
                  layout="fill"
                  className="h-full w-full object-cover object-center"
                />
                {/* Rest of your code */}
              </div>
            );
          })}
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  );
};

export default Category;


/* 

/* 

const Category = ({ product }) => {
  if (!product || !product.fields) {
    return null; // Handle the case when product or product.fields is undefined
  }

  const { title, slug, image, price, category } = product.fields;

  const imageUrl = Array.isArray(image)
    ? "https:" + image[0].fields.file.url // If image is an array, use the first image URL
    : "https:" + image.fields.file.url; // If image is an object, use the image URL directly

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={imageUrl}
              layout="fill"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    New Arrivals
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src={imageUrl}
              layout="fill"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src={imageUrl}
              layout="fill"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {category}
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Category; */

const posts = [
  {
    id: 1,
    title: "8 Unique Ways Of Wearing A Hoodie",
    href: "https://blog.thejacketmaker.com/wearing-a-hoodie/",
    description:
      "Think about a clothing item that is an absolute balance between style and comfort, and the hoodie pops up in your mind for sure. A hoodie, or a hooded sweatshirt, is a garment that is mostly made with a comfortable, thick fabric. The attached hood serves the purpose of covering the neck and head, keeping the wearer protected from cold and rain.",
    imageUrl:
      "https://blog.thejacketmaker.com/wp-content/uploads/2021/08/m8-930x620.jpg.webp",
    date: "August 13, 2021",
    datetime: "2021-08-13",
    author: {
      name: "The Jacket Maker",
      imageUrl:
        "https://blog.thejacketmaker.com/wp-content/uploads/tJM-BLOG-LOGO.png",
    },
  },
  {
    id: 2,
    title: "The Essential Guide to Hoodie Care",
    href: "https://wegotteez.com/blogs/t-shirts-hoodies-fashion/the-essential-guide-to-hoodie-care",
    description:
      "If your hoodie has graphics or designs on it, it's especially important to take good care of it to keep the graphics looking good. Here are some tips for properly caring for your hoodie:",
    imageUrl:
      "https://wegotteez.com/cdn/shop/articles/care_for_your_hoodie_400x.jpg?v=1672688176",
    date: "January 02, 2023",
    datetime: "2023-01-02",
    author: {
      name: "wegotteez.com",
      imageUrl:
        "https://wegotteez.com/cdn/shop/files/20200117_WGT_Long_logo_410x.png?v=1613698716",
    },
  },
  {
    id: 3,
    title: "5 Things We Love About Hoodies",
    href: "https://blog.stagwears.com/5-things-we-love-about-hoodies/",
    description:
      "All of you have at least one hoodie in your wardrobe, right? C’mon y’all, don’t tell me otherwise! Because it’s a timeless, classic must-have wardrobe staple. People of all ages, fashion interests, and clothing preferences wear hoodies the way they want and exude swag in their own way. Kudos to the humble hoodie for being so versatile!",
    imageUrl:
      "https://blog.stagwears.com/wp-content/uploads/2021/10/Hoodie-Zip-Men-2-600x762.webp",
    date: "December 15, 2021",
    datetime: "2021-12-15",
    author: {
      name: "STAG WEARS",
      imageUrl: "https://stagwears.com/frontend/images/logo_stagwears.svg",
    },
  },
];

export function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Read more articles about hoodies...
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

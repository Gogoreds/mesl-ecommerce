import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import Head from "next/head";

const Layout = ({children}) => {
  return ( 
  <div>
       <Head>     
        <title>MESL - Only Clothing Store You'll Ever Need!</title>
        <meta
          name="description"
          content="We strive to provide the best quality clothing to our clients."
        />
      </Head>
    <Navbar/>
    {children}
    <Footer />
  </div>
   );
}
 
export default Layout;
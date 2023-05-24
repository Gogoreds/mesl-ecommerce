import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import Head from "next/head";
import CookieBanner from './CookieBanner';

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
    <CookieBanner />
    <Footer />
  </div>
   );
}
 
export default Layout;
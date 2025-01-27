import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {CloseButton, ToastContainer} from 'react-toastify';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
  return (
      <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer
              closeButton={CloseButton}
              icon={true}
              position={"bottom-right"}
              autoClose={5000}
              hideProgressBar={true}
              closeOnClick
              draggable
              pauseOnHover
          />
      </>
  );}

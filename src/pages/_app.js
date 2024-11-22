
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "@/styles/scss/custom.scss";
import "@/styles/scss/landing_page.scss";
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

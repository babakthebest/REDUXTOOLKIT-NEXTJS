import { wrapper } from "../redux/store";

//styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
//

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

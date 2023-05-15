import '../styles/globals.css'

// INTERNAL IMPORT
import {NavBar} from '../components/componentsindex'

const myApp=({ Component, pageProps })=>(
    <div>
        <NavBar/>
        <Component {...pageProps} />
    </div>
);

export default myApp;
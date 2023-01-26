import "../styles/globals.css";
import "swiper/css/bundle";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <>
      <Component {...pageProps} />
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}
        useRef={tawkMessengerRef}
      />
    </>
  );
}

export default MyApp;

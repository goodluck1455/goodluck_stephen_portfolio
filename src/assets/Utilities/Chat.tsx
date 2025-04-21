// TawkMessenger.tsx
// import { TawkMessengerReact } from "@tawk.to/tawk-messenger-react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
const API = import.meta.env.VITE_tawk_API_KEY

const TawkMessenger = () => {
  return (
    <TawkMessengerReact
      propertyId= {API}
      widgetId="default"
    />
  );
};

export default TawkMessenger;

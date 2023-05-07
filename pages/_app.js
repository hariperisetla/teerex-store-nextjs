// Import global CSS styles
import "@/styles/globals.css";

// Import AppLayout
import AppLayout from "@/layouts/AppLayout";

// Import StoreProvider from StoreContext
import { StoreProvider } from "@/context/StoreContext";
import StatusMessage from "@/components/error/StatusMessage";

// App Component
const App = ({ Component, pageProps }) => {
  return (
    // Wrapping StoreProvider on AppLayout on Components
    <StoreProvider>
      <AppLayout>
        {/* Error and Success Status Messages */}
        <StatusMessage />
        <Component {...pageProps} />
      </AppLayout>
    </StoreProvider>
  );
};

// Exporting the App component
export default App;

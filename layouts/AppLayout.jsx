// Importing Header and Footer Components from @components
import { Header, Footer } from "@/components/layout";

// AppLayout Component
const AppLayout = ({ children }) => {
  return (
    // App Container with a gray background
    <div className="bg-gray-100">
      {/* Render the Header Component */}
      <Header />
      {/* MainComponent Container */}
      <main className="min-h-[90vh]">{children}</main>
      {/* Render the Footer Component */}
      <Footer />
    </div>
  );
};

// Exporting the AppLayout component
export default AppLayout;

import Header from "./DefaultLayout/Header";
import Footer from "./DefaultLayout/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
  );
}

export default DefaultLayout;

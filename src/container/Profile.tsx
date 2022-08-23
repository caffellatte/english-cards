import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return(
    <section>
      <Header />
      <div
        className="container ht-100 d-flex justify-content-center align-items-center"
        style={{ height: '100vh'}}
      >
        <h2>Profile</h2>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
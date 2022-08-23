import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Dashboard = () => {
  return(
    <section>
      <Header />
      <Body>
        <div
          className="container ht-100 d-flex justify-content-center align-items-center"
          style={{ height: '100vh'}}
        >
        <h2>English Cards</h2>
      </div>
      </Body>
      <Footer />
    </section>
  );
};

export default Dashboard;
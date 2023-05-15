import About from "../About/About";
import Banner from "../Banner/Banner";
import OurService from "../OurService/OurService";

const Home = () => {
    return (
        <>
            {/* Banner Section */}
            <section className="mx-2 my-2 lg:my-10 lg:mx-0">
                <Banner></Banner>
            </section>

            {/* About Section */}
            <section className="mx-2 mt-5 mb-12 lg:my-28 lg:mx-0">
                <About></About>
            </section>

            {/* Our Service Area Section */}
            <section>
                <OurService></OurService>
            </section>
        </>
    );
};

export default Home;
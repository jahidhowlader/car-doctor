
const About = () => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="hero ">
            <div className="hero-content flex-col lg:gap-14 lg:flex-row">
                <div className="relative">
                    <div className="mr-12 lg:mr-24">
                        <img src="https://i.ibb.co/Pwpqv24/person.jpg" className="rounded lg:rounded-lg" alt="worker" />
                    </div>
                    <img className="absolute w-[200px] lg:w-[327px] border-8 border-white right-0 top-1/2 rounded-lg" src="https://i.ibb.co/HVqx10J/parts.jpg" alt="parts" />
                </div>
                <div >
                    <p className="text-root font-bold pb-5">About Us</p>
                    <h1 className="text-3xl lg:text-5xl font-bold pb-7 w-3/4">We are qualified & of experience in this field</h1>
                    <p className="pb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pb-4 lg:pb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="my-btn">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
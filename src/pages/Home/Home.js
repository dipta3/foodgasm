import About from "./About/About";
import Banner from "./Banner/Banner";
import Foods from "./Foods/Foods";
import Message from "./Message/Message";
import ReviewShow from "./ReviewShow/ReviewShow";



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Foods></Foods>
            <Message></Message>
            <ReviewShow></ReviewShow>
        </div>

    );
};

export default Home;
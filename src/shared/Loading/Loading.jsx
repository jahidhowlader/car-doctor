import Lottie from "lottie-react"
import LoadingAnime from './Loading.json'

const Loading = () => {
    return (
        <div>
            <Lottie animationData={LoadingAnime} loop={true}></Lottie>
        </div>
    );
};

export default Loading;
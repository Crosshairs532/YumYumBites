import Loader from "@/utils/Loader";
const loading = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center">
            <Loader></Loader>
        </div>
    );
};

export default loading;
import TrackYourParcel from "./TrackYourParcel";

const Banner = () => {
    return (
        <div className="relative">
            {/* Banner Image */}
            <div className="relative">
                <img
                    className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover"
                    src="https://res.cloudinary.com/dzfkxjeui/image/upload/v1756045327/banner-1_xr6ggc.jpg"
                    alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <p className="text-white text-3xl md:text-5xl font-bold text-center">
                        <span className="text-[#f7aa2e]">Fast</span> &
                        <span className="text-[#f7aa2e]"> Secure</span> <br />
                        Parcel Delivery at Your Doorstep
                    </p>
                </div>
            </div>

            {/* TrackYourParcel overlapping bottom */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20">
                <TrackYourParcel />
            </div>
        </div>
    );
};

export default Banner;
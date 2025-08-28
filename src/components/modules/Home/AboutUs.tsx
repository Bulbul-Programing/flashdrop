import { Shield, Truck } from "lucide-react";
import { motion } from "framer-motion";
import truck from "../../../assets/Image/truck.png";

const features = [
    {
        icon: <Truck className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />,
        title: "Fast Delivery",
        desc: "Quick, reliable, and on-time delivery for every parcel.",
        delay: 0.3,
    },
    {
        icon: <Shield className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />,
        title: "Secured Service",
        desc: "Your parcels are handled with care and maximum security.",
        delay: 0.5,
    },

]

const AboutUs = () => {
    return (
        <section className=" pt-24 md:pt-28 lg:pt-24 border-b-4 border-[#FBAE3F]">
            <div className="container  flex flex-col lg:flex-row justify-baseline items-center px-4 md:px-8 ">

                {/* Left Content */}
                <div className="flex-1 lg:pr-12 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4">
                            ABOUT US
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8 },
                        }}
                        viewport={{ once: true }}
                    >
                        <p className=" leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            At <span className="font-semibold">Go Delivery</span>, we make
                            sending and receiving parcels easier, faster, and safer. Our
                            mission is simple – to connect people through reliable parcel
                            delivery. With features like real-time tracking, instant booking,
                            and doorstep delivery, we ensure your packages are delivered
                            securely and on time.
                        </p>
                    </motion.div>

                    {/* Features */}
                    <div className=" flex flex-col md:flex-row lg:flex-col gap-x-3 space-y-3">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, delay: item.delay },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center text-left border p-3 rounded-md space-x-4 max-w-sm mx-auto lg:mx-0">
                                    {item.icon}
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold ">
                                            {item.title}
                                        </h3>
                                        <p className=" text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex- mt-[-40px] md:mt-[-60px] lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                        }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={truck}
                            alt="Delivery Van"
                            className="w-72 md:w-96 lg:w-full max-w-md mx-auto drop-shadow-lg"
                        />
                    </motion.div>
                </div>  
            </div>
        </section>
    );
};

export default AboutUs;

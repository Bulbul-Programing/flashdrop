import { Truck, Package, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "E-Commerce Solutions",
        imageLink:
            "https://res.cloudinary.com/depy0i4bl/image/upload/v1766577070/service-03_zdypoh.webp",
        icon: Truck,
    },
    {
        title: "Freight Transportation",
        imageLink:
            "https://res.cloudinary.com/depy0i4bl/image/upload/v1766577069/service-01_e0xgkl.webp",
        icon: Truck,
    },
    {
        title: "Warehousing & Distribution",
        imageLink:
            "https://res.cloudinary.com/depy0i4bl/image/upload/v1766577070/service-04_yzvtb4.webp",
        icon: Package,
    },
    {
        title: "Supply Chain Management",
        imageLink:
            "https://res.cloudinary.com/depy0i4bl/image/upload/v1766577069/service-02_akrzfr.webp",
        icon: Layers,
    },
];

const OurService = () => {
    return (
        <section className="py-16 bg-background border-b-4 border-[#FBAE3F]">
            <div className="text-center mb-12">
                <p className="text-primary font-semibold flex justify-center items-center gap-2 text-sm">
                    <Truck className="w-5 h-5" /> OUR SERVICES <Truck className="w-5 h-5" />
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
                    Your Freight, Our Priority.
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 70 + (20 * index) }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            }}
                            viewport={{ once: true }}
                            key={index}
                        >
                            <div

                                className="relative bg-card rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 group">
                                <div className="relative w-32 h-32 mb-4 rounded-full ">
                                    <img
                                        src={service.imageLink}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute -bottom-5 inset-x-0 flex justify-center ">
                                        <div
                                            className="bg-card p-3 rounded-full border border-secondary-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                                        >
                                            <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-semibold mt-6">{service.title}</h3>
                            </div>
                        </motion.div>

                    );
                })}
            </div>
        </section>
    );
};

export default OurService;

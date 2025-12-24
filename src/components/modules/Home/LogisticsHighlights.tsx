import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const LogisticsHighlights = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-12 border-b-4 border-[#FBAE3F]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Card */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="border rounded-2xl p-8 flex flex-col justify-between bg-card">
                            <div>
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-orange-500 mb-6">
                                    🚚
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">24 / 7 Support</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    From its medieval origins to the digital era, learn everything
                                    there is to know about the ubiquitous lorem ipsum passage.
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                </p>
                            </div>

                            <button className="mt-6 inline-flex items-center gap-2 w-fit rounded-full bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-500 transition">
                                Contact
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Middle Column */}
                <div className="flex flex-col gap-6">
                    {/* Image Card */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-2xl overflow-hidden h-48">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                                    alt="Logistics Warehouse"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                                    <h4 className="text-white font-semibold text-lg">
                                        Cutting Edge Delivered
                                    </h4>
                                    <p className="text-white/80 text-xs">
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="rounded-2xl bg-primary p-6  flex flex-col justify-between h-40">
                                <p className="text-sm font-medium">
                                    Over 10+ Years Of
                                    <br />
                                    Proven Expertise In Logistics
                                </p>

                                <button className="inline-flex items-center gap-2 w-fit rounded-full border border-white px-4 py-1.5 text-xs hover:bg-white hover:text-orange-500 transition">
                                    Learn More
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/depy0i4bl/image/upload/v1766590445/148_qg8ibo.jpg"
                        alt="Tracking Dashboard"
                        className="h-full w-full object-cover grayscale"
                    />

                    {/* Decorative circle */}
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary" />

                    {/* Content */}
                    <Link to='/tracking' className="absolute text-black/70 cursor-pointer bottom-6 bg-primary px-5 py-2 rounded-lg left-6 flex items-center gap-4">
                        <h1 className="text-2xl font-semibold">
                            Track Parcel
                        </h1>
                        <p className="w-10 h-10 rounded-full border  flex items-center justify-center transition">
                            <ArrowRight />
                        </p>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default LogisticsHighlights;

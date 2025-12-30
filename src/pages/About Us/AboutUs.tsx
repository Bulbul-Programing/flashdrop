import { Users, Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
const AboutUs = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold  mb-6">
                    About <span className="text-[#F5AB35]">Us</span>
                </h2>
                <p className=" max-w-2xl mx-auto mb-12">
                    We are committed to making parcel delivery smarter, faster, and more reliable.
                    Our mission is to connect people and businesses through seamless logistics solutions
                    while ensuring transparency every step of the way.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <Users className="w-12 h-12 text-[#F5AB35] mb-4" />
                            <h3 className="text-xl font-semibold ">Our Team</h3>
                            <p className=" text-sm mt-2">
                                A passionate group of innovators working to redefine parcel delivery.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <Target className="w-12 h-12 text-[#F5AB35] mb-4" />
                            <h3 className="text-xl font-semibold ">Our Mission</h3>
                            <p className=" text-sm mt-2">
                                To provide secure, efficient, and transparent parcel services worldwide.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <Award className="w-12 h-12 text-[#F5AB35] mb-4" />
                            <h3 className="text-xl font-semibold">Our Values</h3>
                            <p className=" text-sm mt-2">
                                Trust, reliability, and innovation are at the core of everything we do.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
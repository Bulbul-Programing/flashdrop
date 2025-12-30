import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "How can I track my parcel?",
        answer:
            "You can track your parcel using the unique tracking ID provided at the time of shipment. Enter it in the tracking section on the website to see real-time updates.",
    },
    {
        question: "Can I cancel my parcel after dispatch?",
        answer:
            "Senders can cancel parcels only if they have not been dispatched. Once the parcel is in transit, cancellation is not possible.",
    },
    {
        question: "How do I register as a sender or receiver?",
        answer:
            "During registration, you can select your role (Sender or Receiver). Each role has access to role-specific dashboards and features.",
    },
    {
        question: "What if I forget my password?",
        answer:
            "Click on the 'Forgot Password' link on the login page. You will receive instructions via your registered email to reset your password.",
    },
    {
        question: "How does the admin manage parcels and users?",
        answer:
            "Admins have access to all users and parcels. They can block/unblock users, update delivery status, and manage parcel records through the admin dashboard.",
    },
];
const FAQ = () => {
    return (
        <div id="faq" className="border-b-4 px-5 border-[#FBAE3F]">
            <div className="p-4 ">
                <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.7 },
                        }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <Accordion type="single" collapsible className=" w-full">
                            {faqData.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1.3 },
                        }}
                        viewport={{ once: true }}
                        className="w-full flex justify-end"
                    >
                        <img className="w-[500px] rounded-xl" src="https://res.cloudinary.com/depy0i4bl/image/upload/v1766582261/freepik__talk__26942_omen5q.png" alt="" />
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default FAQ;
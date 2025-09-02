import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import z from "zod"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string({ error: "Name is required" }).min(1, { message: "Name must be at least 2 characters" }),
    email: z.email({ error: "Email is required" }),
    message: z.string({ error: "Message is required" }).min(10, { message: "Message must be at least 10 characters" }),
})


const ContactUs = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: undefined,
            email: undefined,
            message: undefined,
        },
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        toast.success('Message Send Successfully!')
        form.reset({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Contact <span className="text-[#F5AB35]">Us</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Have questions or need assistance? Reach out to us anytime.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-[#F5AB35]" />
                            <p className="text-gray-700">support@example.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-[#F5AB35]" />
                            <p className="text-gray-700">+8801872-0*****</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-[#F5AB35]" />
                            <p className="text-gray-700">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card className="rounded-2xl shadow-md">
                    <CardContent className="p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
                                <div className="grid grid-cols-1">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="mb-4">
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Deo" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="mb-4">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="example@gmail.com" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="mb-4">
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Your Message" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button className="hover:cursor-pointer w-full" type="submit">Submit</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ContactUs;
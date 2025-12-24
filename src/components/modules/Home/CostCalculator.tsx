/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
    height: z.number({ message: 'Height is required' }).min(1, { message: 'Height must be greater than 0' }),
    width: z.number({ message: 'Width is required' }).min(1, { message: 'Width must be greater than 0' }),
    weight: z.number({ message: 'Weight is required' }).min(0.1, { message: 'Weight must be at least 0.1 kg' }),
})

type CostCalculatorProps = {
    defaultCost?: number;
}

const CostCalculator = ({ defaultCost = 0.00 }: CostCalculatorProps) => {
    const [loading, setLoading] = useState(false)
    const [calculatedCost, setCalculatedCost] = useState(defaultCost)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            height: undefined,
            width: undefined,
            weight: undefined,
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        setLoading(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // In a real application, this would come from your API
            const calculated = calculateCost(data)
            setCalculatedCost(calculated)
            toast.success("Cost calculated successfully!")
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: any) {
            toast.error("Failed to calculate cost. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Mock cost calculation function
    const calculateCost = (data: any): number => {
        // Simple calculation based on volume and weight
        const volume = data.height * data.width;
        const baseCost = volume * 0.01 + data.weight * 2;
        return Math.round(baseCost * 100) / 100;
    }

    return (
        <div className="w-full px-5 py-10 border-b-4 border-[#FBAE3F]">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                {/* Image Section */}
                <div className="w-full p-5 lg:w-2/5 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-md">
                            <img
                                src="https://res.cloudinary.com/dzfkxjeui/image/upload/v1756143588/Gemini_Generated_Image_adoyn7adoyn7adoy-removebg-preview_mydrik.png"
                                alt="Courier Man"
                                className="w-[70%] h-auto object-contain"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                                <div className="text-xl font-bold">Fast & Reliable</div>
                                <div className="text-sm">Delivery Services</div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Form Section */}
                <div className="w-full lg:w-3/5 rounded-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="shadow-lg rounded-md">
                            <div className="bg-gradient-to-r from-primary py-2 mb-5 to-primary/90 text-white rounded-t-lg">
                                <CardTitle className="text-xl text-center">CALCULATE YOUR COST</CardTitle>
                            </div>
                            <CardContent className="pb-5">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="height"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>HEIGHT (CM)</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter height"
                                                                type="number"
                                                                {...field}
                                                                onChange={e => field.onChange(parseFloat(e.target.value))}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="width"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>WIDTH (CM)</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter width"
                                                                type="number"
                                                                {...field}
                                                                onChange={e => field.onChange(parseFloat(e.target.value))}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="weight"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>WEIGHT (KG)</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter weight"
                                                                type="number"
                                                                step="0.1"
                                                                {...field}
                                                                onChange={e => field.onChange(parseFloat(e.target.value))}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                                            <div className="text-lg font-semibold">TOTAL COST:</div>
                                            <div className="text-2xl font-bold text-primary">${calculatedCost.toFixed(2)}</div>
                                        </div>

                                        <Button
                                            className="w-full hover:cursor-pointer mt-4 bg-primary hover:bg-primary/90"
                                            disabled={loading}
                                            type="submit"
                                            size="lg"
                                        >
                                            {loading ? "Calculating..." : "Calculate Cost"}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default CostCalculator;
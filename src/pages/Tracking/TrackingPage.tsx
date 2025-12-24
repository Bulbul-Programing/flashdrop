/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import z from 'zod';
import ParcelStatusTackingPage from './ParcelStatusTackingPage';

const formSchema = z.object({
    trackingId: z.string({ message: 'Tracking Id Require!' })
})
const TrackingPage = () => {
    const [trackingId, setTrackingId] = useState('')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            trackingId: ""
        },
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setTrackingId(data.trackingId)
    }

    return (
        <div className='my-5 min-h-screen'>
            <div
                className="relative h-[150px] md:h-[250px] w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/depy0i4bl/image/upload/v1766573938/6974877_4402_1_deg938.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-white text-xl md:text-3xl md:my-2 font-bold uppercase">
                            Product Tracking
                        </h1>
                        <p className="text-white text-xs md:text-base">
                            Track your product & see the current condition
                        </p>
                    </div>
                </div>
            </div>


            <div className="mt-4 max-w-2xl mx-auto p-6 rounded-lg border border-primary shadow-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <div className="flex items-center gap-x-4">
                            <FormField
                                control={form.control}
                                name="trackingId"
                                render={({ field }) => (
                                    <FormItem className=" flex-1 ">
                                        <FormControl>
                                            <Input placeholder="Your Parcel Tracking Id" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="hover:cursor-pointer" type="submit">Submit</Button>
                        </div>
                        <p className='text-xs text-muted-foreground'>For test: TRK-20250902-353427</p>
                    </form>
                </Form>
            </div>
            <ParcelStatusTackingPage trackingId={trackingId} />
        </div>
    );
};

export default TrackingPage;
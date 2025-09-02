/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";

const formSchema = z.object({
    trackingId: z.string({ message: 'Tracking Id Require!' })
})


const TrackYourParcel = () => {
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            trackingId: ""
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        navigate(`/${data.trackingId}/parcelStatus`, { state: data.trackingId })
    }

    return (
        <div className=' bg-background shadow-xl border-2 rounded-lg my-5  min-w-[380px] md:min-w-2xl p-3 md:p-5 mx-auto'>
            <div >
                <p className=' uppercase text-lg font-semibold pb-0 md:inline mr-3'>track your parcel</p>
                <span className='text-sm text-slate-500'>Now you can track your product easily</span>
            </div>
            <div className="mt-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <div className="flex items-center gap-x-4">
                            <FormField
                                control={form.control}
                                name="trackingId"
                                render={({ field }) => (
                                    <FormItem className="mb-5 flex-1 ">
                                        <FormLabel>Tracking Id</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Parcel Tracking Id" {...field} />
                                        </FormControl>
                                        {/* <FormMessage /> */}
                                    </FormItem>
                                )}
                            />
                            <Button className="hover:cursor-pointer" type="submit">Submit</Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    );
};

export default TrackYourParcel;
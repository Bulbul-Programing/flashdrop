/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
    parcelId: z.string({ message: 'Parcel id is Require' })
})


const TrackYourParcel = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            parcelId: ""
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
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
                        <div className="flex gap-x-3 items-center">
                            <FormField
                                control={form.control}
                                name="parcelId"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input className="" placeholder="Your parcel id" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import z from 'zod';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { SelectContent, SelectItem, SelectValue, Select, SelectTrigger } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.email({ message: 'Email is Require' }),
    phone: z.string().min(11, { message: "Phone number minimum 11 digit" }),
    role: z.enum(['receiver', 'sender']),
    password: z.string({ message: 'Password is require' }).min(6, { message: 'Password is minimum 6 character' }),
    address: z.string({ message: 'Address is require' }).min(5, { message: 'Address minimum 5 characters' })
})

const AddParcelModal = () => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            address: "",
            role: 'sender'
        },
    })


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        try {
            // const response = await registerUser(data).unwrap()

            // if (response.success) {
            //     toast.success(response.message)
            setLoading(false)
            //     navigate('/login')
            // }
        } catch (error: any) {
            // if (error?.data?.success === false) {
            //     toast.error(error.data.message)
            //     setLoading(false)
            // }
        }
    }
    return (
        <div className='mb-3'>
            <AlertDialog>
                <AlertDialogTrigger asChild >
                    <div className='flex justify-end'>
                        <Button>Add Parcel</Button>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='md:min-w-[600px] lg:min-w-[700px] '>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Jon deo" {...field} />
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
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="01*********" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Role</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue='sender'>
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your role!" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent >
                                                    <SelectItem value="sender">Sender</SelectItem>
                                                    <SelectItem value="receiver">Receiver</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="********" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="hover:cursor-pointer" disabled={loading} type="submit">Submit</Button>
                            <div className="mt-4 text-center text-sm">
                                Have an account?{" "}
                                <Link to='/login' className="underline underline-offset-4">Login</Link>
                            </div>
                        </form>
                    </Form>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Okay</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default AddParcelModal;
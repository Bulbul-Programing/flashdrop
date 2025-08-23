/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegisterUserMutation } from "@/redux/Auth/authApi";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.email({ message: 'Email is Require' }),
    phone: z.string().min(11, { message: "Phone number minimum 11 digit" }),
    role: z.enum(['receiver', 'sender']),
    password: z.string({ message: 'Password is require' }).min(6, { message: 'Password is minimum 6 character' }),
    address: z.string({ message: 'Address is require' }).min(5, { message: 'Address minimum 5 characters' })
})

const SignInFrom = () => {
    const [registerUser] = useRegisterUserMutation()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

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
        setLoading(true)
        const toastId = toast('')
        try {
            const response = await registerUser(data).unwrap()

            if (response.success) {
                toast.success(response.message, { id: toastId })
                setLoading(false)
                navigate('/')
            }
        } catch (error: any) {
            if (error?.data?.success === false) {
                toast.error(error.data.message, { id: toastId })
                setLoading(false)
            }
        }
    }

    return (
        <div className="w-full max-w-sm md:max-w-2xl">
            <div className='flex flex-col gap-6'>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Register Here</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                                <Button disabled={loading} type="submit">Submit</Button>
                                <div className="mt-4 text-center text-sm">
                                    Have an account?{" "}
                                    <Link to='/login' className="underline underline-offset-4">Login</Link>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SignInFrom;
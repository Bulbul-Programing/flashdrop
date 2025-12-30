/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginUserMutation } from "@/redux/features/Auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
    email: z.email({ message: 'Email is Require' }),
    password: z.string({ message: 'Password is require' }).min(6, { message: 'Password is minimum 6 character' })
})

const LoginForm = () => {
    const [loginUser] = useLoginUserMutation()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true)

        try {
            const response = await loginUser(data).unwrap()

            if (response.success) {
                toast.success(response.message)
                setLoading(false)
                navigate('/')
            }
        } catch (error: any) {
            if (error?.data?.success === false) {
                toast.error(error.data.message)
                setLoading(false)
            }
        }
    }

    const loginWithCredential = async (role: string) => {
        let payload
        if (role === 'admin') {
            payload = {
                email: "a@gmail.com",
                password: '112233'
            }
        }
        if (role === 'sender') {
            payload = {
                email: "e@gmail.com",
                password: '112233'
            }
        }
        if (role === 'receiver') {
            payload = {
                email: "r@gmail.com",
                password: '112233'
            }
        }
        setLoading(true)

        try {
            const response = await loginUser(payload).unwrap()

            if (response.success) {
                toast.success(response.message)
                setLoading(false)
                navigate('/')
            }
        } catch (error: any) {
            if (error?.data?.success === false) {
                toast.error(error.data.message)
                setLoading(false)
            }
        }

    }

    return (
        <div className="w-full max-w-sm">
            <div className='flex flex-col gap-6'>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Login In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                                <div className="grid grid-cols-1">
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
                                </div>
                                <Button className="hover:cursor-pointer w-full" disabled={loading} type="submit">Submit</Button>
                            </form>
                        </Form>
                        <Button onClick={() => window.open(`https://flashdrop-one.vercel.app/api/v1/auth/google`)} className=" w-full cursor-pointer bg-primary rounded-lg mt-5 p-1">
                            <img className="w-6" src="https://res.cloudinary.com/depy0i4bl/image/upload/v1767024255/icons8-google-480_uememu.png" alt="" />
                            <p >Login With Google</p>
                        </Button  >
                        <div>
                            <p className="font-semibold my-3">Login As : </p>
                            <div className="flex gap-x-4">
                                <Button disabled={loading} onClick={() => loginWithCredential('admin')} className="cursor-pointer" size="sm">Admin</Button>
                                <Button disabled={loading} onClick={() => loginWithCredential('sender')} className="cursor-pointer" size="sm">Sender</Button>
                                <Button disabled={loading} onClick={() => loginWithCredential('receiver')} className="cursor-pointer" size="sm">Receiver</Button>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to='/register' className="underline underline-offset-4">Register</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginForm;
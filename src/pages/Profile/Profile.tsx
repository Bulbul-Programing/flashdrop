/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useGetUserInfoQuery, useUpdateUserStatusMutation } from "@/redux/features/Auth/authApi";
import ProfileSkeleton from "@/Skeleton/ProfileSkeleton";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(11, { message: "Phone number minimum 11 digit" }),
    address: z.string().min(5, { message: "Address minimum 5 characters" }),
    role: z.enum(["sender", "receiver"]),
    email: z.email(),
});

type UpdateProfileFormValues = z.infer<typeof formSchema>;

const Profile = () => {
    const [updateUser] = useUpdateUserStatusMutation()
    const [loading, setLoading] = useState(false);
    const { data: userInfo, isLoading } = useGetUserInfoQuery(undefined)

    const user = userInfo?.data

    const form = useForm<UpdateProfileFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            role: "sender",
        },
    });

    const onSubmit = async (data: UpdateProfileFormValues) => {
        setLoading(true);
        try {
            const payload = {
                userId: user._id,
                data: {
                    name: data.name,
                    phone: data.phone,
                    address: data.address,
                }
            }
            const response = await updateUser(payload).unwrap();

            if (response.success) {
                toast.success(response.message || "Profile updated successfully");
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            form.reset({
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            });
        }
    }, [user, form]);

    if (isLoading) {
        return <ProfileSkeleton />
    }

    return (
        <div className="w-full max-w-sm mx-auto my-10 md:max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center">
                        Update Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                {/* Name */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email (disabled) */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} disabled />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Phone */}
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

                                {/* Role (disabled) */}
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel>Role</FormLabel>
                                            <Select value={field.value} disabled>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="sender">Sender</SelectItem>
                                                    <SelectItem value="receiver">Receiver</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Address */}
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="mb-4 md:col-span-2">
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button
                                disabled={loading || !form.formState.isDirty}
                                type="submit"
                            >
                                Update Profile
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
};

export default Profile;
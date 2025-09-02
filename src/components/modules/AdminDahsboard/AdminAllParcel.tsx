/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetUserInfoQuery } from "@/redux/features/Auth/authApi";
import { useDeleteParcelMutation, useGetAdminAllParcelQuery, useUpdateParcelStatusMutation } from "@/redux/features/parcel/parcelApi";
import type { TParcel } from "@/types/TParcel";
import { Trash2 } from "lucide-react";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AddParcelModal from "../SenderDashborad/AddParcelModal";


const STATUS_FLOW: Record<string, string[]> = {
    requested: ["approved", "cancelled", "blocked"],
    approved: ["dispatched", "cancelled", "blocked"],
    dispatched: ["in-transit", "cancelled", "blocked"],
    "in-transit": ["delivered", "blocked"],
    delivered: ["returned"],
    cancelled: [],
    blocked: [],
    returned: [],
    rescheduled: [],
}

const ROLE_ACTIONS: Record<string, string[]> = {
    admin: ["approved", "dispatched", "in-transit", "blocked", "cancelled"],
    sender: ["cancelled"],
    receiver: ["delivered", "returned",],
}

const formSchema = z.object({
    returnReason: z.string({ message: 'ReturnReason is require' }).min(6, { message: 'ReturnReason is minimum 6 character' })
})
const AdminAllParcel = () => {
    const { data: parcelInfo } = useGetAdminAllParcelQuery(undefined);
    const { data: userData, } = useGetUserInfoQuery(undefined)
    const [deleteParcel] = useDeleteParcelMutation()
    const [updateParcelStatus] = useUpdateParcelStatusMutation()
    const [modalOpen, setModalOpen] = useState(false)
    const [returnLoading, setReturnLoading] = useState(false)
    const [returnParcelId, setReturnParcelId] = useState('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            returnReason: "",
        },
    })

    const data = parcelInfo?.data

    const handleDeleteParcel = async (parcelId: string) => {
        const toastId = toast.loading("Removing...");
        try {
            const res = await deleteParcel(parcelId).unwrap();

            if (res.success) {
                toast.success(res.message || "Removed", { id: toastId });
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleUpdateParcelStatus = async (parcelId: string, status: string) => {
        if (status === 'returned') {
            setReturnParcelId(parcelId)
            return setModalOpen(true)

        }
        const payload = {
            parcelId: parcelId,
            data: {
                status: status
            }
        }

        const toastId = toast.loading("Updating...")
        try {
            const res = await updateParcelStatus(payload).unwrap();
            console.log(res);
            if (res.success) {
                toast.success(res.message || "Removed", { id: toastId });
            }
            if (res.error) {
                toast.success(res.message || "Removed", { id: toastId });
            }
        } catch (err: any) {
            console.log(err);
            if (err?.data) {
                toast.error(err?.data?.message || "Removed", { id: toastId });
            }
        }

    }

    const handleReturn: SubmitHandler<FieldValues> = async (returnReason) => {
        const payload = {
            parcelId: returnParcelId,
            data: {
                status: 'returned',
                returnReason: returnReason.returnReason
            }
        }
        setReturnLoading(true)
        const toastId = toast.loading("Updating...")
        try {
            const res = await updateParcelStatus(payload).unwrap();
            console.log(res);
            if (res.success) {
                toast.success(res.message || "Removed", { id: toastId });
                setModalOpen(false)
                setReturnParcelId('')
            }
            if (res.error) {
                toast.success(res.message || "Removed", { id: toastId });
            }
        } catch (err: any) {
            console.log(err);
            if (err?.data) {
                toast.error(err?.data?.message || "Removed", { id: toastId });
            }
        }
    }
    return (
        <div>
            {
                (userData?.data?.role === 'sender' || userData?.data?.role === 'admin') && <AddParcelModal />
            }

            <div className="rounded-2xl border border-gray-200 shadow-md overflow-x-auto">
                <Table className=" overflow-x-scroll">
                    <TableHeader className="bg-[#F5AB35] text-white">
                        <TableRow>
                            <TableHead className="text-white">Tracking ID</TableHead>
                            <TableHead className="text-white">Receiver</TableHead>
                            <TableHead className="text-white">Address</TableHead>
                            <TableHead className="text-white">Weight</TableHead>
                            <TableHead className="text-white">Fee</TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            <TableHead className="text-right text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((parcel: TParcel) => {
                            const possibleActions = STATUS_FLOW[parcel.status] || []
                            const roleAllowed = ROLE_ACTIONS[`${userData?.data?.role}`] || []
                            const actions = possibleActions.filter((a) =>
                                roleAllowed.includes(a)
                            )

                            return (
                                <TableRow key={parcel._id} className="hover:bg-gray-50">
                                    <TableCell className="font-medium">{parcel.trackingId}</TableCell>
                                    <TableCell>{parcel.receiver?.name}</TableCell>
                                    <TableCell className="max-w-[220px] truncate">
                                        {parcel.receiverAddress}
                                    </TableCell>
                                    <TableCell>{parcel.weight} kg</TableCell>
                                    <TableCell>{parcel.deliveryFee} ৳</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-3 py-1 text-xs font-semibold rounded-full ${parcel.status === "delivered"
                                                ? "bg-green-100 text-green-700"
                                                : parcel.status === "cancelled"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {parcel.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="flex items-center justify-end gap-2">

                                        {actions.map((action) => (
                                            <Button
                                                key={action}
                                                onClick={() => handleUpdateParcelStatus(parcel._id, action)}
                                                size="sm"
                                                className="bg-[#F5AB35] text-white hover:bg-[#d99427]"
                                            >
                                                {action}
                                            </Button>
                                        ))}
                                        {
                                            userData?.data?.role === 'admin' && <DeleteConfirmation
                                                onConfirm={() => handleDeleteParcel(parcel._id)}
                                            >
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="text-red-500 hover:bg-red-50"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </DeleteConfirmation>
                                        }
                                        {
                                            userData?.data?.role === 'sender' && <DeleteConfirmation
                                                onConfirm={() => handleDeleteParcel(parcel._id)}
                                            >
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="text-red-500 hover:bg-red-50"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </DeleteConfirmation>
                                        }

                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
            <div>
                <AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle></AlertDialogTitle>
                            <AlertDialogDescription>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <Form {...form}>
                            <form id="returnParcel" onSubmit={form.handleSubmit(handleReturn)} className="space-y-2">
                                <div className="grid grid-cols-1">
                                    <FormField
                                        control={form.control}
                                        name="returnReason"
                                        render={({ field }) => (
                                            <FormItem className="mb-4">
                                                <FormLabel>Return Reason</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Please type your return reason" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </form>
                        </Form>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>
                                <Button className="hover:cursor-pointer" form="returnParcel" disabled={returnLoading} type="submit">Submit</Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
};

export default AdminAllParcel;
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
import { useGetMyAllParcelQuery } from "@/redux/features/parcel/parcelApi";
import type { TParcel } from "@/types/TParcel";
import { Pencil, Trash2 } from "lucide-react";
import AddParcelModal from "./AddParcelModal";

const STATUS_FLOW: Record<string, string[]> = {
    requested: ["approved", "cancelled", "blocked"],
    approved: ["dispatched", "cancelled", "blocked"],
    dispatched: ["in-transit", "cancelled", "blocked"],
    "in-transit": ["delivered", "blocked", "returned"],
    delivered: ["returned"],
    cancelled: [],
    blocked: [],
    returned: ["rescheduled"],
    rescheduled: ["dispatched"],
}

const ROLE_ACTIONS: Record<string, string[]> = {
    admin: ["approved", "dispatched", "in-transit", "blocked", "cancelled"],
    sender: ["cancelled"],
    receiver: ["delivered", "returned", "rescheduled"],
}
const AddParcelTable = () => {
    const { data: parcelInfo } = useGetMyAllParcelQuery(undefined);
    const { data: userData, } = useGetUserInfoQuery(undefined)
    const data = parcelInfo?.data


    return (
        <div>
            <AddParcelModal />
            <div className="rounded-2xl border border-gray-200 shadow-md overflow-x-auto">
                <Table className=" overflow-x-scroll">
                    <TableHeader className="bg-[#000000] text-white">
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
                            // Role-based allowed actions
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
                                        {/* Role-based next status buttons */}
                                        {actions.map((act) => (
                                            <Button
                                                key={act}
                                                size="sm"
                                                className="bg-[#F5AB35] text-white hover:bg-[#d99427]"
                                            >
                                                {act}
                                            </Button>
                                        ))}

                                        {/* Edit/Delete buttons */}
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-[#F5AB35] hover:bg-[#F5AB35]/10"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-red-500 hover:bg-red-50"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AddParcelTable;
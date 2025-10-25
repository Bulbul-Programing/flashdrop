import { useDeleteUserMutation, useGetAllUserQuery, useUpdateUserStatusMutation } from '@/redux/features/Auth/authApi';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { TUser } from '@/types/TUser';
import { Button } from '@/components/ui/button';
import DeleteConfirmation from '@/components/DeleteConfirmation';
import { Trash2 } from 'lucide-react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from 'sonner';

const AllUsers = () => {
    const { data: users } = useGetAllUserQuery(undefined)
    const [deleteUser] = useDeleteUserMutation()
    const [updateUser] = useUpdateUserStatusMutation()

    const handleDeleteUser = async (userId: string) => {
        const toastId = toast.loading("Deleting user...");
        try {
            const res = await deleteUser(userId).unwrap();

            if (res.success) {
                toast.success(res.message || "Delete user", { id: toastId });
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleEditUserStatus = async (userId: string, userStatus: boolean) => {
        const payload = {
            userId,
            data: {
                isBlocked: userStatus
            }
        }
        const toastId = toast.loading("Update user...");
        try {
            const res = await updateUser(payload).unwrap();

            if (res.success) {
                toast.success(res.message || "Update user", { id: toastId });
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className="rounded-2xl border border-gray-200 shadow-md overflow-x-auto w-full">
                <Table className="w-full">
                    <TableHeader className="bg-[#F5AB35] text-white">
                        <TableRow>
                            <TableHead className="text-white">User ID</TableHead>
                            <TableHead className="text-white">Name</TableHead>
                            <TableHead className="text-white">Email</TableHead>
                            <TableHead className="text-white">Phone</TableHead>
                            <TableHead className="text-white">Address</TableHead>
                            <TableHead className="text-white">Role</TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            <TableHead className="text-right text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {users?.data?.map((user: TUser) => (
                            <TableRow key={user._id} className="hover:bg-gray-50">
                                <TableCell className="font-medium max-w-[180px] truncate">{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell className="max-w-[220px] truncate">
                                    {user.address}
                                </TableCell>
                                <TableCell>
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full 
                                ${user.role === "admin"
                                                ? "bg-blue-100 text-blue-700"
                                                : user.role === "sender"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-700"}`}
                                    >
                                        {user.role}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full 
                                ${!user.isBlocked
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"}`}
                                    >
                                        {user.isBlocked ? "Blocked" : "Active"}
                                    </span>
                                </TableCell>

                                <TableCell className="flex items-center justify-end gap-2">
                                    {
                                        user.isBlocked ?
                                            <Button
                                                size="sm"
                                                className="bg-[#F5AB35] text-white hover:bg-[#d99427]"
                                                onClick={() => handleEditUserStatus(user._id, !user.isBlocked)}
                                            >
                                                <FaRegEye />
                                            </Button> :
                                            <Button
                                                size="sm"
                                                className="bg-[#F5AB35] text-white hover:bg-[#d99427]"
                                                onClick={() => handleEditUserStatus(user._id, !user.isBlocked)}
                                            >
                                                <FaRegEyeSlash />
                                            </Button>
                                    }


                                    <DeleteConfirmation onConfirm={() => handleDeleteUser(user._id)}>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-red-500 hover:bg-red-50"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </DeleteConfirmation>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AllUsers;
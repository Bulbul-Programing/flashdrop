import { type ReactNode } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IProps {
    children: ReactNode;
    onConfirm: () => void;
}
const DeleteConfirmation = ({ children, onConfirm }: IProps) => {
    const handleConfirm = () => {
        onConfirm();
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent className='text-center'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-xl font-bold text-red-500 text-center'>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className='text-red-400 text-center my-3'>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className='space-x-2'>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='text-white bg-red-500 hover:bg-red-600 cursor-pointer' onClick={handleConfirm}>
                        Delete
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteConfirmation;
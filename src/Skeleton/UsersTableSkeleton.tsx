import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const UsersTableSkeleton = ({ rows = 6 }: { rows?: number }) => {
    return (
        <div className="rounded-2xl border border-gray-200 shadow-md overflow-x-auto w-full">
            <Table className="w-full">
                {/* Header Skeleton */}
                <TableHeader className="bg-[#F5AB35]">
                    <TableRow>
                        {[
                            "User ID",
                            "Name",
                            "Email",
                            "Phone",
                            "Address",
                            "Role",
                            "Status",
                            "Actions",
                        ].map((_, index) => (
                            <TableHead key={index}>
                                <Skeleton className="h-4 w-20 bg-white/60" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                {/* Body Skeleton */}
                <TableBody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell>
                                <Skeleton className="h-4 w-40" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-24" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-36" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-24" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-44" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-20 rounded-full" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-20 rounded-full" />
                            </TableCell>
                            <TableCell className="flex justify-end gap-2">
                                <Skeleton className="h-8 w-10 rounded-md" />
                                <Skeleton className="h-8 w-8 rounded-md" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTableSkeleton;

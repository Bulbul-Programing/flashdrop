import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
const ParcelTableSkeletonReceiver = () => {
    return (
        <div className="rounded-2xl border border-gray-200 shadow-md overflow-x-auto">
            <Table className="w-full">
                {/* Header Skeleton */}
                <TableHeader className="bg-[#F5AB35]">
                    <TableRow>
                        {[
                            "Tracking ID",
                            "Receiver",
                            "Address",
                            "Weight",
                            "Fee",
                            "Status",
                            "Actions",
                        ].map((_, i) => (
                            <TableHead key={i}>
                                <Skeleton className="h-4 w-24 bg-white/60" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                {/* Body Skeleton */}
                <TableBody>
                    {Array.from({ length: 6 }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell>
                                <Skeleton className="h-4 w-36" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-24" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-48" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-16" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-20" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-24 rounded-full" />
                            </TableCell>
                            <TableCell className="flex items-center justify-end gap-2">
                                {/* Simulated action buttons */}
                                <Skeleton className="h-8 w-20 rounded-md" />
                                <Skeleton className="h-8 w-20 rounded-md" />
                                <Skeleton className="h-8 w-8 rounded-md" />
                                <Skeleton className="h-8 w-8 rounded-md" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ParcelTableSkeletonReceiver;
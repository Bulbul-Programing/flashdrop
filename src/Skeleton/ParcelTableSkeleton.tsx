import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const ParcelTableSkeleton = ({ rows = 6 }: { rows?: number }) => {
    return (
        <div className=" w-full">
            <div className='flex justify-end mb-3'>
                <Button>Add Parcel</Button>
            </div>
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
                                    <Skeleton className="h-4 w-28" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-24" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-40" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-16" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-20" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-6 w-20 rounded-full" />
                                </TableCell>
                                <TableCell className="flex justify-end gap-2">
                                    <Skeleton className="h-8 w-28 rounded-md" />
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
};

export default ParcelTableSkeleton;

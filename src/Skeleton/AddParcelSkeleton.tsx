import { Skeleton } from "@/components/ui/skeleton"

export function AddParcelSkeleton() {
    return (
        <div className="mb-3">
            <div className="flex justify-end mb-4">
                <Skeleton className="h-10 w-28 rounded-md" /> {/* Add Parcel button */}
            </div>

            <div className="md:min-w-[600px] lg:min-w-[700px] space-y-6 border rounded-lg p-6">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Receiver Field */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" /> {/* Label */}
                        <Skeleton className="h-10 w-full rounded-md" /> {/* Popover Trigger */}
                    </div>

                    {/* Height */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>

                    {/* Width */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>

                    {/* Weight */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3">
                    <Skeleton className="h-10 w-24 rounded-md" /> {/* Cancel */}
                    <Skeleton className="h-10 w-24 rounded-md" /> {/* Okay */}
                </div>
            </div>
        </div>
    )
}

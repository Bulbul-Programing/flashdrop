import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ParcelTrackingSkeleton = () => {
    return (
        <div className="m-5">
            <Card className="w-full pt-0 max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-200">
                <CardHeader className="bg-[#F5AB35] text-white rounded-t-2xl">
                    <CardTitle className="text-lg text-center font-semibold">
                        <Skeleton className="h-6 w-40 mx-auto" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />

                        <ul className="space-y-6">
                            {[...Array(3)].map((_, index) => (
                                <li key={index} className="relative flex items-start gap-4">
                                    {/* Status icon */}
                                    <Skeleton className="z-10 w-10 h-10 rounded-full" />

                                    {/* Status details */}
                                    <div className="flex-1 space-y-1">
                                        <Skeleton className="h-4 w-32" />
                                        <Skeleton className="h-3 w-48" />
                                        <Skeleton className="h-3 w-24" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Current status footer */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl border text-center">
                        <Skeleton className="h-3 w-24 mx-auto mb-1" />
                        <Skeleton className="h-5 w-32 mx-auto" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ParcelTrackingSkeleton

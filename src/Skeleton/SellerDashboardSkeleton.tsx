import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SellerDashboardSkeleton = () => {
    return (
        <div>
            {/* Summary Card */}
            <Card className="shadow-lg">
                <CardHeader>
                    <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 rounded-lg border"
                            >
                                <Skeleton className="h-6 w-16 mb-2" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                {/* Pie Chart Skeleton */}
                <Card className="shadow-md">
                    <CardHeader>
                        <Skeleton className="h-6 w-40" />
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center">
                        <Skeleton className="h-48 w-48 rounded-full" />
                    </CardContent>
                </Card>

                {/* Line Chart Skeleton */}
                <Card className="shadow-md">
                    <CardHeader>
                        <Skeleton className="h-6 w-48" />
                    </CardHeader>
                    <CardContent className="h-[320px] flex flex-col justify-end gap-3">
                        {/* Fake chart bars */}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-6 w-full"
                                style={{ width: `${60 + index * 8}%` }}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SellerDashboardSkeleton;
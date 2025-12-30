import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
    return (
        <div className="w-full max-w-sm mx-auto my-10 md:max-w-2xl">
            <Card>
                <CardHeader>
                    {/* Title */}
                    <Skeleton className="h-7 w-40 mx-auto" />
                </CardHeader>

                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            {/* Name */}
                            <div className="mb-4 space-y-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-10 w-full" />
                            </div>

                            {/* Email */}
                            <div className="mb-4 space-y-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-10 w-full" />
                            </div>

                            {/* Phone */}
                            <div className="mb-4 space-y-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-10 w-full" />
                            </div>

                            {/* Role */}
                            <div className="mb-4 space-y-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-10 w-full" />
                            </div>

                            {/* Address */}
                            <div className="mb-4 space-y-2 md:col-span-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                        </div>

                        {/* Button */}
                        <Skeleton className="h-10 w-40" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileSkeleton;

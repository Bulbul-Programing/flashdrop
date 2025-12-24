/* eslint-disable @typescript-eslint/no-explicit-any */
import ParcelStatusNotFound from "@/components/modules/NotFound/ParcelStatusNotFound";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetParcelStatusQuery } from "@/redux/features/parcel/parcelApi";
import ParcelStatusProgressCardSkeleton from "@/Skeleton/ParcelStatusProgressCardSkeleton";
import { Badge, CheckCircle2, Clock, MapPin, Package, Truck } from "lucide-react";

const statusIcons: Record<string, any> = {
    requested: Clock,
    approved: CheckCircle2,
    dispatched: Package,
    "in-transit": Truck,
    delivered: MapPin,
}

const ParcelStatusTackingPage = ({ trackingId }: { trackingId: string }) => {

    const { data: parcelStatusData, isLoading, isError } = useGetParcelStatusQuery(trackingId, { skip: !trackingId })

    const parcel = parcelStatusData?.data
    const CurrentIcon = statusIcons[parcel?.currentStatus] || Package
    if (trackingId.length < 1) {
        return null
    }

    if (isError) {
        return <ParcelStatusNotFound />
    }

    if (!parcelStatusData && !isLoading) {
        return <ParcelStatusNotFound />
    }

    if (isLoading) {
        return <ParcelStatusProgressCardSkeleton />
    }

    return (
        <div className="my-5 md:my-10">
            <Card className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-border bg-card">
                {/* Header */}
                <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base md:text-lg font-semibold text-foreground">
                            Tracking ID:{" "}
                            <span className="text-muted-foreground">
                                {parcel.trackingId}
                            </span>
                        </CardTitle>

                        <Badge
                            className="capitalize rounded-full bg-primary text-primary-foreground"
                        >
                            {parcel.currentStatus.replace("-", " ")}
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Current Status */}
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted border border-border">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-sm">
                            <CurrentIcon className="w-6 h-6" />
                        </span>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Current Status
                            </p>
                            <p className="text-lg font-semibold capitalize text-foreground">
                                {parcel.currentStatus.replace("-", " ")}
                            </p>
                        </div>
                    </div>

                    {/* Status History */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Status History
                        </h3>

                        {parcel.history.map((log: any, index: number) => {
                            const Icon = statusIcons[log.status] || Package

                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card transition hover:bg-accent"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground">
                                        <Icon className="w-5 h-5" />
                                    </span>

                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium capitalize text-foreground">
                                                {log.status.replace("-", " ")}
                                            </p>

                                            <span className="text-xs text-muted-foreground">
                                                {new Date(log.createdAt).toLocaleString()}
                                            </span>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            Updated by{" "}
                                            <span className="font-medium text-foreground">
                                                {log.updatedBy.name}
                                            </span>{" "}
                                            ({log.updatedBy.role})
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default ParcelStatusTackingPage;
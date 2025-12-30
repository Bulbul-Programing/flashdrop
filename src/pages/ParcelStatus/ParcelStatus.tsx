/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetParcelStatusQuery } from '@/redux/features/parcel/parcelApi';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Package, Truck, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ParcelStatusNotFound from '@/components/modules/NotFound/ParcelStatusNotFound';
import ParcelTrackingSkeleton from '@/Skeleton/ParcelTrackingSkeleton';

const statusIcons: Record<string, any> = {
    requested: Clock,
    approved: CheckCircle2,
    dispatched: Package,
    "in-transit": Truck,
    delivered: MapPin,
}

const ParcelStatus = () => {
    const location = useLocation();

    const { data: parcelStatusData, isLoading } = useGetParcelStatusQuery(location.state, { skip: !location })
    const parcel = parcelStatusData?.data

    if (isLoading) {
        return <ParcelTrackingSkeleton />
    }

    if (!parcelStatusData && !isLoading) {
        return <ParcelStatusNotFound />
    }

    return (
        <div className='m-5'>
            <Card className="w-full pt-0 max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-200">
                <CardHeader className="bg-[#F5AB35] text-white rounded-t-2xl">
                    <CardTitle className="text-lg text-center font-semibold">
                        Tracking ID: {parcel.trackingId}
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />

                        <ul className="space-y-6">
                            {parcel?.history?.map((log: any, index: number) => {
                                const Icon = statusIcons[log.status] || Package
                                const isActive = log.status === parcel.currentStatus

                                return (
                                    <li key={index} className="relative flex items-start gap-4">
                                        {/* Status icon */}
                                        <span
                                            className={`z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${isActive
                                                ? "bg-[#F5AB35] text-white border-[#F5AB35] shadow-lg"
                                                : "bg-white text-gray-500 border-gray-300"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </span>

                                        {/* Status details */}
                                        <div>
                                            <p
                                                className={`font-medium capitalize ${isActive ? "text-[#F5AB35]" : "text-gray-700"
                                                    }`}
                                            >
                                                {log.status.replace("-", " ")}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Updated by: <span className="font-semibold">{log.updatedBy.name}</span>{" "}
                                                ({log.updatedBy.role})
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {new Date(log.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Current status footer */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl border text-center">
                        <p className="text-sm text-gray-500">Current Status</p>
                        <p className="text-lg font-semibold text-[#F5AB35] capitalize">
                            {parcel.currentStatus.replace("-", " ")}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ParcelStatus;
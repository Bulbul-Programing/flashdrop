import { PackageX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ParcelStatusNotFound = () => {
    return (
        <Card className="w-full my-10 max-w-md mx-auto text-center rounded-2xl shadow-md border border-gray-200">
            <CardContent className="p-10 flex flex-col items-center gap-4">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F5AB35]/10">
                    <PackageX className="w-12 h-12 text-[#F5AB35]" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800">Parcel Not Found</h2>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                    We couldn’t find any status log for this parcel.
                    Please double-check your tracking ID and try again.
                </p>

                {/* Action */}
                <Button
                    className="bg-[#F5AB35] text-white hover:bg-[#d99427] mt-4"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </CardContent>
        </Card>
    );
};

export default ParcelStatusNotFound;
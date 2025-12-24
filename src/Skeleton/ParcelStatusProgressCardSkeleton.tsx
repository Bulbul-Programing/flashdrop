import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const ParcelStatusProgressCardSkeleton = () => {
  return (
    <div className="m-5">
      <Card className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl border">
        {/* Header */}
        <CardHeader className="pb-4 border-b">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-56 rounded-md" />
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Current Status */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border">
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>

          {/* Status History */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-4 rounded-xl border bg-white"
              >
                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>

                  <Skeleton className="h-3 w-56" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ParcelStatusProgressCardSkeleton

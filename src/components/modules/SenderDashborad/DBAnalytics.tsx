/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetMyAllParcelQuery } from "@/redux/features/parcel/parcelApi";
import SellerDashboardSkeleton from "@/Skeleton/SellerDashboardSkeleton";
import { GetLastTwelveMonthLabel } from "@/utils/GetLastTwelveMonthLabel";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, XAxis, YAxis, LineChart, Line, CartesianGrid } from "recharts";


const DBAnalytics = () => {
    const { data, isLoading } = useGetMyAllParcelQuery(undefined);

    const COLORS = [
        "#F5AB35",
        "#FFD180",
        "#FFB300",
        "#FF7043",
        "#4CAF50",
        "#2196F3",
        "#9C27B0",
        "#E53935",
        "#6D4C41",
        "#8E24AA"
    ];

    const parcels = data?.data || [];

    const totalParcels = parcels.length;
    const totalEarnings = parcels.reduce((sum: number, p: any) => sum + (p.deliveryFee || 0), 0);

    const statusData = parcels.reduce((acc: any, p: any) => {
        const found = acc.find((i: any) => i.name === p.status);

        if (found) {
            found.value += 1;
        } else {
            acc.push({ name: p.status, value: 1 });
        }
        return acc;
    }, []);

    const avgWeight = totalParcels
        ? (parcels.reduce((sum: number, p: any) => sum + (p.weight || 0), 0) / totalParcels).toFixed(1)
        : 0;

    const activeParcels = parcels.filter(
        (p: any) => p.status !== "delivered" && p.status !== "cancelled" && p.status !== "returned"
    ).length;

    const lastTwelveMonth = GetLastTwelveMonthLabel();

    const monthCounts: Record<string, number> = {};

    parcels.forEach((p: any) => {
        const d = new Date(p.createdAt);
        const key = d.toLocaleString("default", { month: "short", year: "numeric" });
        monthCounts[key] = (monthCounts[key] ?? 0) + 1;
    });

    const monthlyTrend = lastTwelveMonth.map((label) => ({
        label,                // e.g., "Jan 2025"
        count: monthCounts[label] ?? 0,
    }));

    if (isLoading) {
        return <SellerDashboardSkeleton />
    }

    return (
        <div>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-lg font-semibold text-blue-700">{totalParcels}</p>
                            <p className="text-sm text-gray-600">Total Parcels</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg">
                            <p className="text-lg font-semibold text-green-700"> <span className="text-2xl font-bold">৳</span> {totalEarnings.toFixed(2)}</p>
                            <p className="text-sm text-gray-600">Total Earnings</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg">
                            <p className="text-lg font-semibold text-purple-700">{avgWeight} kg</p>
                            <p className="text-sm text-gray-600">Avg Parcel Weight</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-lg">
                            <p className="text-lg font-semibold text-yellow-700">{activeParcels}</p>
                            <p className="text-sm text-gray-600">Active Parcels</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">

                {/* Status Pie Chart */}
                <Card className="shadow-md ">
                    <CardHeader>
                        <CardTitle>Parcels by Status</CardTitle>
                    </CardHeader>
                    <CardContent className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    dataKey="value"
                                >
                                    {statusData.map((_: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Monthly Trend */}
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Monthly Parcel Trend</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyTrend} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="label" tickMargin={8} />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="count"
                                    stroke="#F5AB35"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DBAnalytics;
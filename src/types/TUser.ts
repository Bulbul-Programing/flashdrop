export type TUser = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: "admin" | "sender" | "receiver"; // Add more roles if needed
    isBlocked: boolean;
};
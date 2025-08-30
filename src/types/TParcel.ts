export type TParcel = {
    _id: string
    sender: string
    senderAddress: string
    receiver: Receiver
    receiverAddress: string
    weight: number
    deliveryFee: number
    status: string
    isBlocked: boolean
    statusLog: StatusLog[]
    createdAt: string
    updatedAt: string
    trackingId: string
}

export interface Receiver {
    _id: string
    name: string
    email: string
    password: string
    address: string
    phone: string
    role: string
    isBlocked: boolean
    createdAt: string
    updatedAt: string
    __v: number
}

export interface StatusLog {
    status: string
    updatedBy: string
    createdAt: string
    updatedAt: string
}

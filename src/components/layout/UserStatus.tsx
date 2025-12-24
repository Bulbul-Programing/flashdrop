import { authApi, useGetUserInfoQuery, useLogOutUserMutation } from '@/redux/features/Auth/authApi';
import { useAppDispatch } from '@/redux/hooks';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Skeleton } from '../ui/skeleton';
import UserNameBadge from '@/utils/UserNameBadge';

const UserStatus = () => {
    const { data: userInfo, isLoading } = useGetUserInfoQuery(undefined)
    const [logOut] = useLogOutUserMutation()
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        setLoading(true)
        const res = await logOut(undefined)
        dispatch(authApi.util.resetApiState())
        if (res?.data?.success) {
            toast.success(res?.data?.message)
            setLoading(false)
        }
    }

    if (isLoading) {
        return <Skeleton className="h-8 w-[70px] rounded-md" />
    }

    return (
        <div>
            {userInfo && userInfo?.data ? (
                <div ref={dropdownRef} className="relative inline-block text-left">
                    <div className="flex items-center">
                        <button className="cursor-pointer" onClick={toggleDropdown}>
                            <UserNameBadge name={userInfo?.data?.name} />
                            {/* <FaRegUser className="w-14 h-14 object-contain rounded-full border p-[2px] " /> */}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-secondary border border-muted-foreground divide-y rounded-md shadow-lg ring-1  ring-opacity-5">
                            <div className="py-1">
                                <div className="px-4 pt-2 flex justify-center flex-col items-center space-y-2 ">
                                    <UserNameBadge name={userInfo?.data?.name} />
                                    <h1 className="text-lg font-medium text-center ">
                                        {userInfo?.data?.name}
                                    </h1>
                                </div>
                                <div>
                                    <div className=" px-4 pb-2 flex flex-col text-sm text-secondary-foreground w-full text-left">
                                        <Link
                                            className="mt-2 border w-full p-2 hover:bg-primary hover:text-primary-foreground transition-all ease-in rounded-md "
                                            to={`/${userInfo?.data?.role}/profile`}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            className="mt-2 border w-full p-2 hover:bg-primary hover:text-primary-foreground transition-all ease-in rounded-md "
                                            to={`/${userInfo?.data?.role}`}
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    disabled={loading}
                                    className=" mx-4 mb-2 w-[86%] px-4 py-2 text-sm bg-destructive cursor-pointer text-white text-center transition-all ease-in rounded-md border"
                                    onClick={() => handleLogout()}
                                >
                                    Log out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    className="px-4 py-2 rounded-md bg-primary transition-all text-primary-foreground font-medium"
                    to="/login"
                >
                    Log In
                </Link>
            )}
        </div>
    );
};

export default UserStatus;
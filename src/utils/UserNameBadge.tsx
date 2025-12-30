const UserNameBadge = ({ name }: { name: string }) => {
    return <p className='uppercase flex justify-center items-center font-bold border border-primary rounded-full text-lg w-10 h-10'>{name.slice(0, 2)}</p>
};

export default UserNameBadge;
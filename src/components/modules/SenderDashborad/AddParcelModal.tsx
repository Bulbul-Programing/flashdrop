/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import z from 'zod';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { useGetReceiversQuery } from '@/redux/features/Auth/authApi';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, ChevronDownIcon, Asterisk, Loader2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TReceiverUserForCreateParcel } from '@/types';
import { useCreateParcelMutation } from '@/redux/features/parcel/parcelApi';

const formSchema = z.object({
    height: z.number({ message: 'Height is required' }).min(1, { message: 'Height must be greater than 0' }),
    width: z.number({ message: 'Width is required' }).min(1, { message: 'Width must be greater than 0' }),
    weight: z.number({ message: 'Weight is required' }).min(0.1, { message: 'Weight must be at least 0.1 kg' }),
    receiver: z.string({ message: 'Receiver is required' }).min(1, { message: 'Receiver is required' }),
})

const AddParcelModal = () => {
    const { data: receivesData } = useGetReceiversQuery(undefined)
    const [createParcel] = useCreateParcelMutation()

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            height: undefined,
            width: undefined,
            weight: undefined,
            receiver: "",
        },
    })

    const { reset } = form

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        data.receiver = data.receiver.split('/')[1]
        setLoading(true)
        try {
            const response = await createParcel(data) as any

            if (response?.data?.success) {
                toast.success(response?.data?.message)
                setLoading(false)
                reset({ receiver: "", height: 0, width: 0, weight: 0 })
                setModalOpen(false)
            }
            if (response?.error) {
                toast.success(response?.error?.data?.message)
                setLoading(false)
            }
        } catch (error: any) {
            if (error?.data?.success === false) {
                toast.error(error.data.message)
                setLoading(false)
            }
        }
    }

    return (
        <div className='mb-3'>
            <AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
                <AlertDialogTrigger asChild >
                    <div className='flex justify-end'>
                        <Button>Add Parcel</Button>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='md:min-w-[600px] lg:min-w-[700px] '>
                    <AlertDialogTitle>Add New Parcel</AlertDialogTitle>
                    <AlertDialogDescription>
                    </AlertDialogDescription>
                    <Form {...form}>
                        <form id='addParcel' onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="receiver"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Select Receiver</FormLabel>
                                            <FormControl>
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-full justify-between"
                                                        >
                                                            <span className={cn("truncate", !field.value && "text-muted-foreground")}>
                                                                {field.value
                                                                    ? receivesData?.data?.find((f: TReceiverUserForCreateParcel) => `${f.name}/${f._id}` === field.value).name
                                                                    : "Select Receiver"}
                                                            </span>
                                                            <ChevronDownIcon size={16} className="shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-full h-[200px] p-0" align="start">
                                                        <Command>
                                                            <CommandInput placeholder="Search Receiver..." />
                                                            <CommandList>
                                                                <CommandEmpty>No Receiver found.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {receivesData?.data?.map((receiver: TReceiverUserForCreateParcel) => (
                                                                        <CommandItem
                                                                            key={receiver.name}
                                                                            value={`${receiver.name}/${receiver._id}`}
                                                                            onSelect={(currentValue) => {
                                                                                field.onChange(currentValue);
                                                                                setOpen(false);
                                                                            }}
                                                                        >
                                                                            <div className='flex flex-col'>
                                                                                <p className='font-semibold'>Name: {receiver.name}</p>
                                                                                <div className='flex items-center'>
                                                                                    <p className='flex items-center mr-2 font-semibold'>Phone: </p>
                                                                                    <div className='flex'>
                                                                                        <Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} /><Asterisk size={10} />
                                                                                    </div>
                                                                                    <p>{receiver.phone.slice(10)}</p>
                                                                                </div>

                                                                            </div>
                                                                            {field.value == `${receiver.name}/${receiver._id}` && (
                                                                                <CheckIcon size={16} className="ml-auto" />
                                                                            )}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>HEIGHT (CM)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter height"
                                                    type="number"
                                                    {...field}
                                                    onChange={e => field.onChange(parseFloat(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="width"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>WIDTH (CM)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter width"
                                                    type="number"
                                                    {...field}
                                                    onChange={e => field.onChange(parseFloat(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="weight"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>WEIGHT (KG)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter weight"
                                                    type="number"
                                                    step="0.1"
                                                    {...field}
                                                    onChange={e => field.onChange(parseFloat(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </form>
                    </Form>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        {
                            loading ? <Button disabled className='hover:cursor-not-allowed'>
                                <Loader2Icon className="animate-spin" />
                                Add Parcel
                            </Button> : <Button type='submit' form='addParcel' className='hover:cursor-pointer'>Add Parcel</Button>
                        }
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default AddParcelModal;
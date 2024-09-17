import React, { useState } from 'react';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLayout } from '@/layouts/admin-layout';
import { Button, buttonVariants } from '@/components/ui/button';
import Select from 'react-select'; // Import react-select
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconArrowLeft, IconChevronLeft, IconChevronRight, IconCirclePlus, IconDotsVertical, IconStar } from '@irsyadadl/paranoid';
import { Image } from '@/components/image';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { AlertAction } from '@/components/alert-action';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { InputErrorMessage } from '@/components/input-error-message';
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Index({ page_meta, page_data, auth, ...props }) {
    const { data: hotels, meta, links } = props.hotels;
    const { package_id, available_hotels } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        hotels: [{ hotel_id: '', night: '' }], // Array of objects for multiple hotels
        package_id: page_data.hotels?.package_id ?? '',
        _method: page_meta.method,
    });

    // State to manage dialog open/close
    const [dialogOpen, setDialogOpen] = useState(false);
    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.packages.hotels.index', package_id),
        values: params,
        only: ['hotels'],
    });

    const hotelOptions = available_hotels.map((hotel) => ({ value: hotel.id, label: hotel.name }));

    // Function to toggle onlyTrashed
    const toggleOnlyTrashed = () => {
        setParams((prev) => ({ ...prev, onlyTrashed: !prev.onlyTrashed }));
    };


    const handleAddHotel = () => {
        setData('hotels', [...data.hotels, { hotel_id: '', night: '' }]);
    };

    const handleHotelChange = (index, field, value) => {
        // Check if the selected hotel_id already exists in other hotels
        const isHotelSelected = data.hotels.some((hotel, i) => i !== index && hotel.hotel_id === value);

        // If the selected hotel is already chosen, show an error message
        if (isHotelSelected) {
            setData('hotels', data.hotels.map((hotel, i) => (i === index ? { ...hotel, [field]: value } : hotel)));
            errors[`hotels.${index}.hotel_id`] = 'Hotel is already selected';
        } else {
            const updatedHotels = [...data.hotels];
            updatedHotels[index][field] = value;
            setData('hotels', updatedHotels);
        }
    };


    const handleRemoveHotel = (index) => {
        const updatedHotels = data.hotels.filter((_, i) => i !== index);
        setData('hotels', updatedHotels);
    };

    // Function to handle submit and close dialog
    const handleSubmitAndCloseDialog = () => {
        post(route('admin.packages.hotels.store', package_id));
        // Close the dialog
        setDialogOpen(false);
    };

    return (
        <AdminLayout>

<Link className={buttonVariants({ variant: 'outline', size: 'sm' }) + ' mb-4'} href={route('admin.packages.index')}><IconArrowLeft className='mr-1' /> Back to List</Link>

            <Card>
                <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                    <CardHeader className="p-0">
                        <CardTitle>{page_meta.title}</CardTitle>
                        <CardDescription>{page_meta.description}</CardDescription>
                    </CardHeader>
                    <div className="flex max-w-md flex-col gap-2 md:flex-row">
                        <Input
                            value={params?.search}
                            onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                            placeholder="Search..."
                        />

                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline"><IconCirclePlus className='w-4 mr-2'/> Assign Hotel to Package</Button>
                            </DialogTrigger>
                            <DialogContent >
                                <DialogHeader>
                                    <DialogTitle>Select Hotels</DialogTitle>
                                    <DialogDescription>
                                        Select available hotels to add
                                    </DialogDescription>
                                </DialogHeader>
                                <ScrollArea className="max-h-[500px]">
                                    <div className="grid gap-4 py-4">
                                        {data.hotels.map((hotel, index) => (
                                            <div key={index} className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor={`hotel-${index}`} className="text-right">
                                                    Hotel
                                                </Label>
                                                <div className="col-span-3">
                                                    <Select
                                                        className="my-react-select-container"
                                                        classNamePrefix="my-react-select"
                                                        id={`hotel-${index}`}
                                                        options={hotelOptions}
                                                        value={hotelOptions.find(option => option.value === hotel.hotel_id)}
                                                        onChange={(option) => handleHotelChange(index, 'hotel_id', option.value)}
                                                    />
                                                    <InputErrorMessage message={errors[`hotels.${index}.hotel_id`]} />
                                                </div>
                                                <Label htmlFor={`night-${index}`} className="text-right">
                                                    Nights
                                                </Label>
                                                <div className="col-span-3">
                                                    <Input
                                                        id={`night-${index}`}
                                                        value={hotel.night}
                                                        onChange={(e) => handleHotelChange(index, 'night', e.target.value)}
                                                    />
                                                    <InputErrorMessage message={errors[`hotels.${index}.night`]} />
                                                </div>
                                                <div className="col-span-4 flex justify-end">
                                                    <Button variant="outline" size="sm" onClick={() => handleRemoveHotel(index)}>Remove</Button>
                                                </div>
                                            </div>
                                        ))}
                                        <Button variant="outline" onClick={handleAddHotel}>Add Another Hotel</Button>
                                    </div>
                                </ScrollArea>
                                <DialogFooter>
                                    <Button onClick={handleSubmitAndCloseDialog} type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Hotels</TableHead>
                                <TableHead>Night</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hotels.map((hotel, index) => (
                                <TableRow key={hotel.id}>
                                    <TableCell>{meta.from + index}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-20">
                                                <Image
                                                    skeletonHeight="40"
                                                    className="h-full w-full object-cover rounded"
                                                    src={`/images/${hotel.image}`}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-semibold">{hotel.name}</p>
                                                <p className="font-normal">{hotel.location}</p>
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, index) => (
                                                        <IconStar width={10} key={index} className={index < hotel.stars ? 'fill-current text-yellow-500' : 'text-gray-300'} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <p>{hotel.night}</p>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <IconDotsVertical className="size-4" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuGroup>
                                                        {!params.onlyTrashed && (
                                                        <>
                                                           

                                                            <DropdownMenuGroup>

                                                                <DropdownMenuSeparator />
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Delete
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title="Delete Package"
                                                                    description="Are you sure you want to delete this Package?"
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.packages.hotels.destroy', [package_id, hotel]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuGroup>
                                                        </>
                                                    )}
                                                    {params.onlyTrashed && (
                                                        <>

                                                            <DropdownMenuItem asChild>
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Restore
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title={'Restore ' + pkg.name}
                                                                    description="Are you sure you want to restore this Package?"
                                                                    action={() =>
                                                                        router.put(
                                                                            route('admin.packages.hotels.restore', [package_id, hotel]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Force Delete
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title="Force Delete"
                                                                    description="Force delete this package? This action will permanently delete the package and all associated data, including bookings, payments, and others. This cannot be undone."
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.packages.hotels.force', [package_id, hotel]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuItem>
                                                        </>
                                                    )}
                                                       
                                                    </DropdownMenuGroup>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </CardContent>
                <CardFooter className="justify-between border-t pt-6 text-sm text-muted-foreground">
                    <span>
                        Showing {meta.from} of {meta.total}
                    </span>
                    {meta.has_pages && (
                        <div className="flex items-center gap-x-1">
                            <Button asChild size="sm" variant="outline">
                                {links.prev ? (
                                    <Link href={links.prev}>
                                        <IconChevronLeft className="-ml-1 mr-1 size-4" />
                                        Prev
                                    </Link>
                                ) : (
                                    <span>Prev</span>
                                )}
                            </Button>
                            <Button asChild size="sm" variant="outline">
                                {links.next ? (
                                    <Link href={links.next}>
                                        Next
                                        <IconChevronRight className="-mr-1 ml-1 size-4" />
                                    </Link>
                                ) : (
                                    <span>Next</span>
                                )}
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </Card>


        </AdminLayout>
    );
}

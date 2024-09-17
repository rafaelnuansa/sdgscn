import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { formatRupiah } from '@/lib/utils';
import useSwal from '@/hooks/useSwal';
import { DialogDescription } from '@radix-ui/react-dialog';
import { IconBag, IconCheck, IconX } from '@irsyadadl/paranoid';
import axios from 'axios'; // Import Axios

export default function BookingDialog({ paket }) {
  const { ask, toast } = useSwal();
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(paket.price);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setTotalPrice(qty * paket.price);
  }, [qty, paket.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (qty < 1) {
      toast.error('Quantity must be at least 1');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData(e.target);
      const response = await axios.post(route('packages.book', { slug: paket.slug }), formData);

      if (response.data.success) {
        toast.success('Booking successful!');
        setOpen(false); // Close the dialog after successful booking
        // Additional actions upon successful booking (e.g., redirect, refresh data)
      } else {
        throw new Error(response.data.message || 'Booking failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle specific error case (e.g., existing booking)
        setError('Existing booking: You already have a pending or approved booking for this package.');
      } else {
        setError(error.message || 'An error occurred while booking');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleQtyChange = (e) => {
    setQty(Math.max(1, parseInt(e.target.value, 10)));
  };

  const handleCloseErrorDialog = () => {
    setError(null);
  };

  const handleExistingBooking = () => {
    // Redirect to bookings.index or any appropriate route
    // Example using react-router-dom
    history.push('/bookings'); // Replace with your actual route
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" onClick={() => setOpen(true)} className="w-full">
            <IconBag /> Booking Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Booking</DialogTitle>
            <DialogDescription>Pastikan Sebelum Pembayaran Melakukan Konfirmasi pada Administrator</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 px-4">
            <div>
              <Label htmlFor="qty">Jumlah Peserta</Label>
              <Input
                type="number"
                name="qty"
                id="qty"
                value={qty}
                onChange={handleQtyChange}
                min="1"
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <Label>Grand Total</Label>
              <div className="mt-1 text-lg font-bold">{formatRupiah(totalPrice)}</div>
            </div>
            <div className="flex justify-end">
              <Button variant="default" type="submit" className="flex w-full items-center" disabled={isLoading}>
                {isLoading ? 'Loading...' : <IconCheck className="mr-2 w-3" />} Booking
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      {error && (
        <Dialog open={true} onOpenChange={handleCloseErrorDialog}>
          <DialogTrigger asChild>
            <div className="hidden" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Error</DialogTitle>
            </DialogHeader>
            <div className="px-4 py-2">
              <p className="text-red-600">{error}</p>
              <div className="flex justify-end mt-4">
                <Button variant="default" onClick={handleCloseErrorDialog}>
                  <IconX className="mr-2 w-3" /> Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

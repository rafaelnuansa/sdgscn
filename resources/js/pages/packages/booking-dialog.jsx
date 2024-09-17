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
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { formatRupiah } from '@/lib/utils';
import useSwal from '@/hooks/useSwal';
import { DialogDescription } from '@radix-ui/react-dialog';
import { IconBag, IconCheck, IconX } from '@irsyadadl/paranoid';

export default function BookingDialog({ paket }) {
  const { ask } = useSwal();
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(paket.price);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setTotalPrice(qty * paket.price);
  }, [qty, paket.price]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty < 1) {
      toast.error('Quantity must be at least 1');
      return;
    }
    ask({
      url: route('packages.book', { slug: paket.slug }),
      message: 'Apakah kamu yakin ingin melakukan booking paket ini?',
      method: 'post',
      data: new FormData(e.target),
    });
  };

  const handleQtyChange = (e) => {
    setQty(Math.max(1, parseInt(e.target.value, 10)));
  };


  return  (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button
      variant="default"
        onClick={() => setOpen(true)}
        className="w-full "
      >
       <IconBag className='me-2'/> Booking Now
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Booking</DialogTitle>
        <DialogDescription>Pastikan Sebelum Pembayaran Melakukan Konfirmasi pada Administrator</DialogDescription>
      </DialogHeader>
      <form method="POST" onSubmit={handleSubmit} className="space-y-6 px-4">
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
          <Button variant="default" type="submit" className="flex w-full items-center">
            <IconCheck className="mr-2 w-3" /> Booking
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
  );
  
}

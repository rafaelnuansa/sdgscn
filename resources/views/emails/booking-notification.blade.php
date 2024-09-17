@component('mail::message')
# Konfirmasi Booking

Halo {{ $name }},

Terima kasih telah melakukan pemesanan {{ $packageName }}. Silakan periksa detail pemesanan Anda di bawah ini:

- **Invoice Booking:** {{ $invoice }}
- **Nama Paket:** {{ $packageName }}
- **Jumlah Peserta:** {{ $qty }}
- **Total Pembayaran:** {{ $amount }}

Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.
Anda bisa Mengecek melalui situs kami : {{ route('bookings.show', $invoice) }}

Terima kasih,<br>
{{ config('app.name') }}
@endcomponent

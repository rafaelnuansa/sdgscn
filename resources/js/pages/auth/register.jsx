import { useEffect } from 'react';
import { GuestLayout } from '@/layouts/guest-layout';
import { InputError } from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import { PhoneInput } from '@/components/ui/phone-input';
import { toast } from 'sonner';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '+62',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const validatePhoneNumber = (phone) => {
        // Ubah regex untuk memeriksa nomor handphone yang valid dengan format Indonesia
        const phoneRegex = /^\+62\d{9,15}$/;
        return phoneRegex.test(phone);
    };

    const submit = (e) => {
        e.preventDefault();

        if (!validatePhoneNumber(data.phone)) {
            // Menampilkan pesan error jika nomor handphone tidak valid
            setData('phone', '+62'); // Reset input nomor handphone
            toast.warning('Masukkan nomor handphone yang valid dengan format Indonesia');
            return;
        }

        post(route('register'));
    };

    return (
        <AppLayout>
            <Head title="Register" />
            <>
                <Container>
                    <div className="mx-auto py-16">
                        <div className="grid items-center md:grid-cols-2 lg:gap-12">
                            <div className='mb-10'>
                                <div className="py-5 max-w-2xl md:mb-12">
                                    <h1 className="mb-5 text-4xl font-semibold text-gray-800 dark:text-gray-200 lg:text-5xl">{'Binbaz Travel' }</h1>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Temukan keberkahan dan kedamaian di Tanah Suci bersama kami.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="ms-auto lg:mx-auto lg:me-0 lg:max-w-lg">
                                    <div className="flex flex-col rounded-2xl">
                                        <Card>  
                                            <CardHeader>
                                                <CardTitle>Daftar</CardTitle>
                                                <CardDescription>Silahkan daftarkan akun anda</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <form onSubmit={submit}>
                                                    <div>
                                                        <Label htmlFor="name">Nama Lengkap</Label>

                                                        <Input
                                                            id="name"
                                                            name="name"
                                                            value={data.name}
                                                            className="mt-1 block w-full"
                                                            autoComplete="name"
                                                            autoFocus
                                                            onChange={(e) => setData('name', e.target.value)}
                                                            required
                                                        />

                                                        <InputError message={errors.name} className="mt-2" />
                                                    </div>

                                                    <div className="mt-4">
                                                        <Label htmlFor="email">Email</Label>

                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={data.email}
                                                            className="mt-1 block w-full"
                                                            autoComplete="username"
                                                            onChange={(e) => setData('email', e.target.value)}
                                                            required
                                                        />

                                                        <InputError message={errors.email} className="mt-2" />
                                                    </div>

                                                    <div className="mt-4">
                                                        <Label htmlFor="phone">Nomor Handphone</Label>

                                                        <PhoneInput 
                                                            id="phone"
                                                            international
                                                            defaultCountry="ID"
                                                            value={data.phone}
                                                            onChange={(value) => setData('phone', value)}
                                                            required
                                                        />

                                                        <InputError message={errors.phone} className="mt-2" />
                                                    </div>

                                                    <div className="mt-4">
                                                        <Label htmlFor="password">Password</Label>

                                                        <Input
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            value={data.password}
                                                            className="mt-1 block w-full"
                                                            autoComplete="new-password"
                                                            onChange={(e) => setData('password', e.target.value)}
                                                            required
                                                        />

                                                        <InputError message={errors.password} className="mt-2" />
                                                    </div>

                                                    <div className="mt-4">
                                                        <Label htmlFor="password_confirmation">Confirm Password</Label>

                                                        <Input
                                                            id="password_confirmation"
                                                            type="password"
                                                            name="password_confirmation"
                                                            value={data.password_confirmation}
                                                            className="mt-1 block w-full"
                                                            autoComplete="new-password"
                                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                                            required
                                                        />

                                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                                    </div>

                                                    <div className='mt-4'>
                                                        <Button className="w-full" disabled={processing}>
                                                            Register
                                                        </Button>
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-end">
                                                        <Link href={route('login')} className="text-sm font-medium text-foreground hover:underline">
                                                            Sudah punya akun? Masuk di sini
                                                        </Link>
                                                    </div>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        </AppLayout>
    );
}

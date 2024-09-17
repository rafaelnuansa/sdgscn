import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { IconLogin } from '@irsyadadl/paranoid';
import { Link, useForm } from '@inertiajs/react';
import { InputError } from '@/components/input-error';
import { Checkbox } from '@/components/ui/checkbox';
import { PhoneInput } from '@/components/ui/phone-input';
import { toast } from 'sonner';

function LoginForm({ onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onSuccess: () => onClose(),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <div className="mb-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mb-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox defaultChecked={true} name="remember" onCheckedChange={(e) => setData('remember', e)} />
                        <span className="ml-2 select-none text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm font-medium text-foreground hover:underline">
                        Lupa Password?
                    </Link>
                </div>
                <div className="mt-2 gap-x-2">
                    <Button className="w-full" disabled={processing} type="submit">
                        Masuk
                    </Button>
                </div>
            </div>
        </form>
    );
}

function RegisterForm() {
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
        const phoneRegex = /^\+62\d{9,15}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(data.phone)) {
            setData('phone', '+62');
            toast.warning('Masukkan nomor handphone yang valid dengan format Indonesia');
            return;
        }
        post(route('register'));
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <Button className="w-full" disabled={processing} type="submit">
                    Register
                </Button>
            </div>
        </form>
    );
}

export default function LoginRegisterDialog() {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default" onClick={() => setOpen(true)} className="w-full">
                    <IconLogin className='mr-2' /> Login / Register
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isLogin ? 'Login' : 'Register'}</DialogTitle>
                    <DialogDescription>
                        {isLogin ? 'Silahkan Login dengan akun anda' : 'Silahkan daftarkan akun anda'}
                    </DialogDescription>
                </DialogHeader>
                {isLogin ? <LoginForm onClose={() => setOpen(false)} /> : <RegisterForm />}
                <div className="mt-4 flex items-center justify-center">
                    <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Belum punya akun? Register' : 'Sudah punya akun? Login'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

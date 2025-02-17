import { useEffect } from 'react';
import { GuestLayout } from '@/layouts/guest-layout';
import { InputError } from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button, buttonVariants } from '@/components/ui/button';
import { AuthLayout } from '@/layouts/auth-layout';
import { Wrench } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
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

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <AuthLayout>
            <Head title="Log in" />
            <>
                <div className="relative ">
                    <div className="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:py-14">
                        <div className="mt-10 grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <div className="max-w-2xl md:mb-12">
                                    <h1 className="mb-5 text-4xl font-semibold lg:text-5xl">Login Account</h1>
                                    <p >
                                    Temukan keberkahan dan kedamaian di Tanah Suci bersama kami.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="ms-auto lg:mx-auto lg:me-0 lg:max-w-lg">
                                    <div className="flex flex-col rounded-2xl sm:p-7">
                                        <div className="mt-5">
                                            <form onSubmit={submit}>
                                                <div className="grid gap-2">
                                                    <div className="grid gap-1">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={data.email}
                                                            className="mt-1 block w-full"
                                                            autoComplete="username"
                                                            autoFocus
                                                            onChange={(e) => setData('email', e.target.value)}
                                                        />

                                                        <InputError message={errors.email} className="mt-2" />
                                                    </div>
                                                    <div className="grid gap-1">
                                                        <Label htmlFor="password">Password</Label>

                                                        <Input
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            value={data.password}
                                                            className="mt-1 block w-full"
                                                            autoComplete="current-password"
                                                            onChange={(e) => setData('password', e.target.value)}
                                                        />

                                                        <InputError message={errors.password} className="mt-2" />
                                                    </div>
                                                    <div className="mt-2 flex items-center justify-between">
                                                        <label className="flex items-center">
                                                            <Checkbox defaultChecked={true} name="remember" onCheckedChange={(e) => setData('remember', e)} />

                                                            <span className="ml-2 select-none text-sm text-muted-foreground">Remember me</span>
                                                        </label>
                                                        {canResetPassword && (
                                                            <Link href="/forgot-password" className="text-sm font-medium text-foreground hover:underline">
                                                                Forgot password?
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <div className="mt-2 gap-x-2">
                                                        <Button className="w-full bg-custom-primary-theme hover:bg-custom-primary-theme" disabled={processing} type="submit">
                                                            Log in
                                                        </Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </>
        </AuthLayout>
    );
}

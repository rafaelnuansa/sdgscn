import { useEffect } from 'react';
import { GuestLayout } from '@/layouts/guest-layout';
import { InputError } from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button, buttonVariants } from '@/components/ui/button';
import { AppLayout } from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { Container } from '@/components/container';

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
        <AppLayout>
            <Head title="Log in" />
            <>
                <Container>
                    <div className="py-16">
                        <div className="ms-auto lg:mx-auto lg:me-0 lg:max-w-lg">
                            <div className="flex flex-col rounded-2xl sm:p-7">
                                <div className="mt-5">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Login</CardTitle>
                                            <CardDescription>Login dengan akun anda</CardDescription>
                                        </CardHeader>
                                        <CardContent>

                                            <form onSubmit={submit}>
                                                <div className="grid gap-2">
                                                    <div className="mb-3">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={data.email}
                                                            className="mt-1 block w-full"
                                                            autoComplete="username"
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
                                                                Lupa Password?
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <div className="mt-2 gap-x-2">
                                                        <Button className="w-full" disabled={processing} type="submit">
                                                            Masuk
                                                        </Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        </AppLayout>
    );
}

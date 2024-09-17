import { GuestLayout } from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-muted-foreground">
            Terima kasih telah mendaftar! Sebelum memulai, bisakah Anda memverifikasi alamat email Anda dengan mengklik link yang baru saja kami kirimkan melalui email kepada Anda? Jika tidak
            terima emailnya, dengan senang hati kami akan mengirimkan email lainnya.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                  Tautan verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between gap-x-1">
                    <Button disabled={processing}>Mengirim ulang email verifikasi</Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                            }),
                        )}
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

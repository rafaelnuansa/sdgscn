import React from "react";
import { Container } from "@/components/container";
import { AppLayout } from "@/layouts/app-layout";
import { Head, useForm, usePage } from "@inertiajs/react";
import {
  IconBrandWhatsapp,
  IconLocation,
  IconMail,
  IconMessageFill,
  IconTelephone,
} from "@irsyadadl/paranoid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactIndex() {
  const { setting } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.store'));
  };

  return (
    <>
      <Head title="Kontak" />

      <Container>
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12">
            <div className="lg:-mx-6 lg:flex lg:items-center">
              <div className="lg:mx-6 lg:w-1/2">
                <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
                  Kontak Kami
                </h1>
                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="-mx-2 flex items-start">
                    <IconLocation />
                    <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                      {setting.website_address ?? ''}
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <IconTelephone />
                    <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                      {setting.website_phone ?? ''}
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <IconBrandWhatsapp />
                    <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                      {setting.website_phone_whatsapp ?? ''}
                    </span>
                  </p>
                  <p className="-mx-2 flex items-start">
                    <IconMessageFill />
                    <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                      {setting.website_email ?? ''}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:mx-6 lg:w-1/2">
                <div className="mx-auto w-full overflow-hidden rounded-lg border bg-white px-8 py-10 shadow-2xl shadow-gray-300/50 dark:bg-gray-900 dark:shadow-black/50 lg:max-w-xl">
                  <h1 className="text-lg font-medium">Kontak Kami</h1>
                  <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex-1">
                      <Label>Full Name</Label>
                      <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                      />
                      {errors.name && <div className="text-red-600">{errors.name}</div>}
                    </div>
                    <div className="mt-6 flex-1">
                      <Label>Email address</Label>
                      <Input
                        type="email"
                        placeholder="email@gmail.com"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                      />
                      {errors.email && <div className="text-red-600">{errors.email}</div>}
                    </div>
                    <div className="mt-6 w-full">
                      <Label>Message</Label>
                      <Textarea
                        placeholder="Message"
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                      />
                      {errors.message && <div className="text-red-600">{errors.message}</div>}
                    </div>
                    <Button className="w-full mt-3" type="submit" disabled={processing}>
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

ContactIndex.layout = (page) => <AppLayout children={page} />;

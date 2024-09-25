import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { InputErrorMessage } from '@/components/input-error-message';
import { MultiSelect } from '@/components/multi-select'; // Import your MultiSelect component

export default function PublicationCreate({ sdgs, experts = [] }) { // Make sure experts are passed to props
    const { data, setData, post, errors, processing } = useForm({
        sdg_id: '',
        title: '',
        year: '',
        link: '',
        selected_experts: [], // Array to store selected experts
    });

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleExpertsChange = (selectedExperts) => {
        setData('selected_experts', selectedExperts); // Update state with selected experts
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.publications.store'), data); // Adjust to your publication store route
    };

    return (
        <>
            <Head title="Create Publication" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Publication</CardTitle>
                        <CardDescription>Create a new publication entry</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="sdg_id">SDG</Label>
                                <select
                                    id="sdg_id"
                                    name="sdg_id"
                                    value={data.sdg_id}
                                    onChange={onChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select SDG</option>
                                    {sdgs.map((sdg) => (
                                        <option key={sdg.id} value={sdg.id}>
                                            {sdg.name}
                                        </option>
                                    ))}
                                </select>
                                <InputErrorMessage message={errors.sdg_id} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" type="text" name="title" value={data.title} onChange={onChange} />
                                <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="year">Year</Label>
                                <Input id="year" type="text" name="year" value={data.year} onChange={onChange} />
                                <InputErrorMessage message={errors.year} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="link">Link</Label>
                                <Input id="link" type="url" name="link" value={data.link} onChange={onChange} />
                                <InputErrorMessage message={errors.link} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="experts">Experts</Label>
                                <MultiSelect
                                    id="experts"
                                    name="selected_experts"
                                    options={experts.map(expert => ({ label: expert.name, value: expert.id }))} // Convert experts to options format
                                    selectedValues={data.selected_experts} // Update prop to match your component's expected input
                                    onValueChange={handleExpertsChange} // Update to match your MultiSelect prop
                                />
                                <InputErrorMessage message={errors.selected_experts} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="default" disabled={processing}>
                                    Create
                                </Button>
                                <Link
                                    href={route('admin.publications.index')} // Adjust to your publication index route
                                    className={buttonVariants({ variant: 'default' }) + ' ml-2'}
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

PublicationCreate.layout = (page) => <AdminLayout children={page} />;

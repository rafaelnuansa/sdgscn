import { router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead,TableHeader,  TableRow } from '@/components/ui/table';
import { Checkbox } from "@/components/ui/checkbox";
import { Button, buttonVariants } from '@/components/ui/button';

export default function HomeContentIndex() {
  const { homeContents, categories } = usePage().props;

  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    categories.forEach(category => {
      const existingContent = homeContents.find(content => content.package_category_id === category.id);
      initialFormData[category.id] = existingContent || {
        package_category_id: category.id,
        sort_column: 'name',
        sort_order: 'asc',
        is_active: !!existingContent
      };
    });
    return initialFormData;
  });

  const handleChange = (categoryId, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [field]: value
      }
    }));
  };

  const handleUpdate = () => {
    const data = Object.values(formData).map(content => ({
      package_category_id: content.package_category_id,
      sort_column: content.sort_column,
      sort_order: content.sort_order,
      is_active: content.is_active,
    }));

    // Perform update using Inertia.put
    router.post(route('admin.home_contents.update'), { data });
  };

  const sortColumnOptions = [
    'created_at',
    'name',
    'price',
    'rate',
    'day',
  ];

  return (
    <Card>
      <CardHeader className="bg-muted/20 border-b">
        <CardTitle>Konten Home</CardTitle>
        <CardDescription>Pilih konten berdasarkan kategori untuk ditampilkan di home</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Sort Column</TableHead>
              <TableHead>Sort Order</TableHead>
              <TableHead>Is Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Select
                    value={formData[category.id].sort_column}
                    onValueChange={(e) => handleChange(category.id, 'sort_column', e)}
                  >
                    <SelectTrigger>
                      <SelectValue>{formData[category.id].sort_column}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {sortColumnOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    value={formData[category.id].sort_order}
                    onValueChange={(e) => handleChange(category.id, 'sort_order', e)}
                  >
                    <SelectTrigger>
                      <SelectValue>{formData[category.id].sort_order}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={formData[category.id].is_active}
                    onCheckedChange={(e) => handleChange(category.id, 'is_active', e)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
     
      </CardContent>
      <CardFooter className="border-t pt-5 bg-muted/40">
      <Button variant="default" onClick={handleUpdate}>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};

HomeContentIndex.layout = (page) => <AdminLayout title="Pengaturan Home" children={page} />;



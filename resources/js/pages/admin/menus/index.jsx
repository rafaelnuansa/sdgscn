import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconPencilBox, IconX } from '@irsyadadl/paranoid';
import { Head } from '@inertiajs/react';

export default function MenuIndex() {
    const [form, setForm] = useState({ name: '', url: '', parent_id: null });
    const [editForm, setEditForm] = useState({ id: null, name: '', url: '', parent_id: null });
    const [menuList, setMenuList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState([]);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        setLoading(true);
        try {
            const response = await axios.get(route('admin.menus.fetch'));
            const { menus, select: selectData } = response.data;

            // Ensure each menu item has a uniqueId
            const updatedMenus = menus.map((menu, index) => ({ ...menu, id: menu.id }));
            setMenuList(updatedMenus);
            setSelect(selectData);
        } catch (error) {
            console.error('Error fetching menus:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleEdit = (menu) => {
        setEditForm({ id: menu.id, name: menu.name, url: menu.url, parent_id: menu.parent_id });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: name === 'parent_id' ? (value === '' ? null : parseInt(value)) : value });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(route('admin.menus.store'), form);
            if (response.data.success) {
                fetchMenus();
                toast.success(response.data.message);
                setForm({ name: '', url: '', parent_id: null });
            } else {
                toast.error('Error creating menu: ' + response.data.message);
            }
        } catch (error) {
            toast.error('Error creating menu:', error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(route('admin.menus.update', { id: editForm.id }), editForm);
            setEditForm({ id: null, name: '', url: '', parent_id: null });
            fetchMenus();
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Error updating menu:', error);
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(route('admin.menus.destroy', { id }));
                    fetchMenus();
                    toast.success('Success', response.data.message);
                } catch (error) {
                    toast.error('Error deleting menu:', error);
                }
                Swal.fire('Deleted!', 'Menu has been deleted.', 'success');
            }
        });
    };

    const onDragEnd = async (result) => {
        const { destination, source, draggableId } = result;

        // If dropped outside the droppable area
        if (!destination) {
            return;
        }

        const updatedMenuList = [...menuList];
        const movedItem = updatedMenuList.find(item => item.id === draggableId);

        if (!movedItem) {
            return;
        }

        // Update order and parent_id based on drag and drop
        if (destination.droppableId === source.droppableId) {
            // Reordering within the same list
            updatedMenuList.splice(source.index, 1);
            updatedMenuList.splice(destination.index, 0, movedItem);
        } else {
            // Moving to a different parent
            const parentId = parseInt(destination.droppableId);
            movedItem.parent_id = parentId === 0 ? null : parentId;
            updatedMenuList.splice(source.index, 1);
            updatedMenuList.splice(destination.index, 0, movedItem);
        }

        try {
            const response = await axios.post(route('admin.menus.sort'), { menuList: updatedMenuList });
            if (response.data.success) {
                toast.success('Updated', response.data.message);
                setMenuList(updatedMenuList);
            } else {
                toast.error('Error sorting menus: ' + response.data.message);
            }
        } catch (error) {
            toast.error('Error sorting menus:', error);
        }
    };
    const renderMenuItems = (items) => {
        if (!items) return null;

        return items.map((item, index) => (
            <Draggable key={index} draggableId={item.id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <MenuItem
                            key={item.id} // Ensure each MenuItem has a unique key
                            item={item}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            menuList={items}
                        >
                            {item.children && item.children.length > 0 && renderMenuItems(item.children)}
                        </MenuItem>
                    </div>
                )}
            </Draggable>
        ));
    };


    return (
        <AdminLayout>
            <Head title='Menu' />
            <Card>
                <CardHeader>
                    <CardTitle>Menu Management</CardTitle>
                    <CardDescription>Manage Menu For your website</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="flex space-x-4 mb-4">
                            <Input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Menu Name"
                                className="p-2 border rounded w-1/3"
                                required
                            />
                            <Input
                                type="text"
                                name="url"
                                value={form.url}
                                onChange={handleInputChange}
                                placeholder="URL"
                                className="p-2 border rounded w-1/3"
                            />
                            <select
                                onChange={(e) => {
                                    setForm({ ...form, parent_id: e.target.value });
                                }}
                                className="p-2 border bg-gray-100 dark:bg-gray-900 rounded w-1/3"
                            >
                                <option value="">No Parent</option>
                                {select.map(({ label, value }) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>
                        <Button type="submit" >
                            Add Menu
                        </Button>
                    </form>
                    {editForm.id && (
                        <form onSubmit={handleEditSubmit} className="mb-8">
                            <div className="flex space-x-4 mb-4">
                                <Input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleEditInputChange}
                                    placeholder="Menu Name"
                                    className="p-2 border rounded w-1/3"
                                    required
                                />
                                <Input
                                    type="text"
                                    name="url"
                                    value={editForm.url}
                                    onChange={handleEditInputChange}
                                    placeholder="URL"
                                    className="p-2 border rounded w-1/3"
                                />
                                <select
                                    value={editForm.parent_id}
                                    onChange={(e) => {
                                        setEditForm({ ...editForm, parent_id: e.target.value });
                                    }}
                                    className="p-2 border bg-gray-100 dark:bg-gray-900 rounded w-1/3"
                                >
                                    <option value="">No Parent</option>
                                    {select.map(({ label, value }) => (
                                        <option key={value} value={value}>{label}</option>
                                    ))}
                                </select>
                            </div>
                            <Button type="submit" >
                                Update Menu
                            </Button>
                        </form>
                    )}
                    {loading ? (
                        <p className='text-center'>Loading...</p>
                    ) : (
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="menuList" type="MENU_ITEM">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {renderMenuItems(menuList)}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    )}
                </CardContent>
            </Card>
        </AdminLayout>
    );
}

const MenuItem = ({ item, handleDelete, handleEdit, children, menuList }) => {
    const hasChildren = children && children.length > 0;

    return (
        <div>
            <div
                className={`flex justify-between items-center p-2 bg-muted/40 border rounded mb-2 ${hasChildren ? 'parent-menu-item' : 'child-menu-item'}`}
            >
                <div>
                    <h4 className="text-sm">{item.name}</h4>
                    <span className="text-xs">{item.url}</span>
                </div>
                <div className="flex gap-2">
                    <Button size="icon" onClick={() => handleEdit(item)}>
                        <IconPencilBox className="size-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(item.id)}
                    >
                        <IconX className="size-4" />
                    </Button>
                </div>
            </div>
            {hasChildren && (
                <div className="ml-4">
                    {children}
                </div>
            )}
        </div>
    );
};

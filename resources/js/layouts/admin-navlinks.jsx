import React from 'react';
import { IconAccessible, IconAlbum, IconBag, IconBarsThree, IconBook, IconBookmark, IconBrandApple, IconBuilding, IconCirclePerson, IconDashboard, IconGallery, IconHome3, IconInvoice, IconNotebookCover, IconNotepad, IconPaper, IconPerson, IconPriceTag, IconSettings, IconSketchbook, IconVideoPlaylist } from '@irsyadadl/paranoid'; // Ensure you have these icons available

export const navLinks = [
    { label: 'Dashboard', route: 'admin.dashboard.index', icon: <IconDashboard /> },
    { label: 'Articles', route: 'admin.articles.index', icon: <IconNotepad /> },
    { label: 'Pages', route: 'admin.pages.index', icon: <IconPaper /> },
    { label: 'Experts', route: 'admin.experts.index', icon: <IconPerson /> },
    { label: 'SGDs', route: 'admin.experts.index', icon: <IconNotebookCover /> },
    { label: 'Research', route: 'admin.experts.index', icon: <IconNotebookCover /> },
    { label: 'Publications', route: 'admin.experts.index', icon: <IconNotebookCover /> },
    { label: 'Sliders', route: 'admin.sliders.index', icon: <IconAlbum /> },
    { label: 'Galleries', route: 'admin.albums.index', icon: <IconGallery /> },
    { label: 'Partners', route: 'admin.partners.index', icon: <IconBrandApple /> },
    { label: 'Menu', route: 'admin.menus.index', icon: <IconBarsThree /> },
    { label: 'Users', route: 'admin.users.index', icon: <IconPerson /> },
    { label: 'Settings', route: 'admin.settings.index', icon: <IconSettings /> },
];

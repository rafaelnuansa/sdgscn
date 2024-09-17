import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function FloatWhatsapp() {
    const { web_setting } = usePage().props;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        // Check if the dark class is applied to the body or any parent element
        const checkDarkMode = () => {
            if (document.documentElement.classList.contains('dark') || document.body.classList.contains('dark')) {
                setIsDarkMode(true);
            } else {
                setIsDarkMode(false);
            }
        };

        checkDarkMode();

        // Add an event listener to watch for class changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true });
        observer.observe(document.body, { attributes: true });

        // Format the phone number
        const formattedPhoneNumber = web_setting.website_phone_whatsapp?.replace(/\+/g, '');
        setPhoneNumber(formattedPhoneNumber);

        return () => {
            observer.disconnect();
        };
    }, [web_setting.website_phone_whatsapp]);

    return (
        <FloatingWhatsApp
            phoneNumber={phoneNumber ?? 0}
            accountName={web_setting.website_name}
            allowEsc
            chatMessage="Ada yang bisa kami bantu?"
            avatar={`/storage/images/${web_setting?.website_logo}`}
            allowClickAway
            darkMode={isDarkMode}
            statusMessage='kami akan melayani anda via whatsapp'
            placeholder='ketik pesan disini..'
            notification
            notificationSound
        />
    );
}

import { IconX } from '@irsyadadl/paranoid';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';

export function FileUploadVideo({ className, onChange, accept, isMultiple }) {
    const [previewSrc, setPreviewSrc] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files || [];
        if (isMultiple) {
            onChange(files);
            const previewVideos = [];
            const readFile = (index) => {
                if (index >= files.length) {
                    setPreviewSrc(previewVideos);
                    return;
                }
                const reader = new FileReader();
                reader.onloadend = () => {
                    previewVideos.push(reader.result);
                    readFile(index + 1);
                };
                reader.readAsDataURL(files[index]);
            };
            readFile(0);
        } else {
            const file = files[0] || null;
            onChange(file);
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewSrc([reader.result]);
                };
                reader.readAsDataURL(file);
            } else {
                setPreviewSrc([]);
            }
        }
    };

    return (
        <div className={cn(className)}>
            {previewSrc.length > 0 && previewSrc.map((src, index) => (
                <div key={index} className="relative rounded-lg">
                    <LazyLoad height={200} width="100%">
                        <motion.video
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            controls
                            className="max-h-sm w-full rounded-lg border object-cover object-center"
                        >
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>
                    </LazyLoad>
                    <Button
                        className="absolute -right-3 -top-3 size-6 rounded-full"
                        size="icon"
                        variant="secondary"
                        type="button"
                        onClick={() => {
                            const newPreviewSrc = [...previewSrc];
                            newPreviewSrc.splice(index, 1);
                            setPreviewSrc(newPreviewSrc);
                        }}
                    >
                        <IconX className="size-4" />
                    </Button>
                </div>
            ))}
            <Input
                className="mt-10 max-w-2xl file:text-foreground"
                onChange={handleFileChange}
                accept={accept}
                type='file'
                multiple={isMultiple}
            />
        </div>
    );
}

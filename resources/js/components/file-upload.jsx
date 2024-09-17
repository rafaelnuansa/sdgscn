import { IconX } from '@irsyadadl/paranoid';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Image } from './image';

export function FileUpload({ className, onChange, accept, isMultiple }) {
    const [previewSrc, setPreviewSrc] = useState(null);

    const handleFileChange = (event) => {
        const files = event.target.files || [];
        if (isMultiple) {
            onChange(files);
            const reader = new FileReader();
            const previewImages = [];
            const readFile = (index) => {
                if (index >= files.length) {
                    setPreviewSrc(previewImages);
                    return;
                }
                const reader = new FileReader();
                reader.onloadend = () => {
                    previewImages.push(reader.result);
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
                    setPreviewSrc(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPreviewSrc(null); // Reset preview if no file is selected
            }
        }
    };

    return (
        <div className={cn(className)}>
            {Array.isArray(previewSrc) ? (
                previewSrc.map((src, index) => (
                    <div key={index} className="relative rounded-lg">
                        <Image
                            src={String(src)}
                            alt="Preview"
                            className="max-h-96 w-full rounded-lg border object-cover object-center"
                        />
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
                ))
            ) : previewSrc ? (
                <div className="relative rounded-lg">
                    <Image
                        src={String(previewSrc)}
                        alt="Preview"
                        className="max-h-96 w-full rounded-lg border object-cover object-center"
                    />
                    <Button
                        className="absolute -right-3 -top-3 size-6 rounded-full"
                        size="icon"
                        variant="secondary"
                        type="button"
                        onClick={() => setPreviewSrc(null)}
                    >
                        <IconX className="size-4" />
                    </Button>
                </div>
            ) : null}
            <Input
                className="mt-2 max-w-[14rem] file:text-foreground"
                onChange={handleFileChange}
                accept={accept}
                type='file'
                multiple={isMultiple}
            />
        </div>
    );
}


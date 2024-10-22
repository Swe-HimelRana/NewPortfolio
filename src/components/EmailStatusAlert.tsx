// components/EmailStatus.tsx
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface EmailStatusProps {
    msg: string;
    status: boolean;
}

export const EmailStatus: React.FC<EmailStatusProps> = ({ msg, status }) => {
    const [isOpen, setIsOpen] = useState(!!msg); // Open if there's a message

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={handleClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{status ? 'Success' : 'Error'}</AlertDialogTitle>
                    <AlertDialogDescription>{msg}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleClose}>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

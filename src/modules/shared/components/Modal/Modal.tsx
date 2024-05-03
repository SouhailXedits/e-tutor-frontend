import { type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
export default function Modal({
  title,
  openTrigger,
  submitTrigger,
  children,
}: {
  title: string;
  openTrigger: ReactNode;
  submitTrigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{openTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter className="flex justify-end w-full items-end">
          {submitTrigger}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

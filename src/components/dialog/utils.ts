import { DialogRef } from ".";

export const showDialog = (dialogRef: React.RefObject<DialogRef | null>) => {
  if (dialogRef && dialogRef.current) {
    dialogRef.current.showModal();
  }
};

export const closeDialog = (dialogRef: React.RefObject<DialogRef | null>) => {
  if (dialogRef && dialogRef.current) {
    dialogRef.current.close();
  }
};
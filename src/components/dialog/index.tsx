import styled from "styled-components";
import { useRef, useImperativeHandle } from "react";
import { colors } from "src/constants/colors";
import { Button } from "../button";

type DialogProps = {
  children?: React.ReactNode;
  ref?: React.Ref<DialogRef>;
};

type DialogHeaderProps = {
  title?: string;
  onClose?: () => void;
};

export type DialogRef = {
  showModal: () => void;
  close: () => void;
};

const S = {
  Dialog: styled.dialog`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    gap: 1px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0;
    max-width: 500px;
    width: 100%;

    &:not([open]) {
      display: none;
    }

    &::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
  `,
  DialogHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  `,
  DialogTitle: styled.h2`
    color: ${colors.grey[8]};
    margin: 0;
  `,
};

export const DialogHeader = ({ title, onClose }: DialogHeaderProps) => {
  return (
    <S.DialogHeader>
      <S.DialogTitle>{title}</S.DialogTitle>
      {onClose && <Button onClick={onClose}>Zamknij</Button>}
    </S.DialogHeader>
);
}

export const Dialog = ({ children, ref }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));

   const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <S.Dialog ref={dialogRef} onClick={handleBackdropClick}>
      {children}
    </S.Dialog>
  );
};
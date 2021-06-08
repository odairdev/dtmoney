import { createContext, ReactNode, useState } from "react";
import { Transaction } from "./TransactionsContext";

interface ModalContextProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  isNewTransactionModalOpen: boolean;
  isEditingTransaction: boolean;
  selectedTransaction: Transaction;
  openEditModal: (transaction: Transaction) => void;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalContextProvider({ children }: ModalContextProviderProps) {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
    const [isEditingTransaction, setIsEditingTransaction] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction>({} as Transaction)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsEditingTransaction(false)
    setIsNewTransactionModalOpen(false);
  }

  function openEditModal(transaction: Transaction) {
    setIsEditingTransaction(true)
    setIsNewTransactionModalOpen(true)
    setSelectedTransaction(transaction)
  }

  return (
    <ModalContext.Provider
      value={{
        isNewTransactionModalOpen,
        isEditingTransaction,
        openEditModal,
        selectedTransaction,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

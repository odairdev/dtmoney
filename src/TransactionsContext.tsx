import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

export interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
  }

  type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

  interface TransactionsContextData {
      transactions: Transaction[];
      createTransaction: (transaction: TransactionInput) => Promise<void>;
      updateTransaction: (id: number, transactionInput: TransactionInput) => void;
      handleDeleteTransaction: (id: number) => Promise<void>;
  }

  interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})

        const {transaction} = response.data


        setTransactions([...transactions, transaction])
    }

    function updateTransaction(id: number, transactionInput: TransactionInput) {
      const newTransactions = [...transactions];

      const transactionIndex = newTransactions.findIndex(transaction => transaction.id === id);

      newTransactions[transactionIndex].title = transactionInput.title;
      newTransactions[transactionIndex].amount = transactionInput.amount;
      newTransactions[transactionIndex].type = transactionInput.type;
      newTransactions[transactionIndex].category = transactionInput.category;

      setTransactions([...newTransactions])
    }

    async function handleDeleteTransaction(id: number) {
        await api
          .delete(`/transactions/${id}`)
    
        const newTransactions = transactions.filter((transaction) => {
          return transaction.id !== id;
        });
    
        setTransactions([...newTransactions]);
      }

    useEffect(() => {
        api.get('/transactions',).then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction, updateTransaction, handleDeleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
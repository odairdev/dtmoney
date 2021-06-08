import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { TransactionsProvider } from "./TransactionsContext";
import { ModalContextProvider } from "./ModalContext";

Modal.setAppElement("#root");

export function App() {

  return (
    <TransactionsProvider>
      <ModalContextProvider>
        <Header />
        <Dashboard />
        <NewTransactionModal />
        <GlobalStyle />
      </ModalContextProvider>
      
    </TransactionsProvider>
  );
}

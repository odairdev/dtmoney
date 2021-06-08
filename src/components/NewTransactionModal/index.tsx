import { FormEvent, useContext, useEffect, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { ModalContext } from "../../ModalContext";
import { TransactionsContext } from "../../TransactionsContext";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

export function NewTransactionModal() {
  const { createTransaction, updateTransaction } =
    useContext(TransactionsContext);
  const {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    isEditingTransaction,
    selectedTransaction,
  } = useContext(ModalContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (isEditingTransaction) {
      setTitle(selectedTransaction.title);
      setAmount(selectedTransaction.amount);
      setType(selectedTransaction.type);
      setCategory(selectedTransaction.category);
    } else {
      setTitle("");
      setType("deposit");
      setAmount(0);
      setCategory("");
    }
  }, [isEditingTransaction, selectedTransaction]);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    setTitle("");
    setType("deposit");
    setAmount(0);
    setCategory("");

    handleCloseNewTransactionModal();
  }

  function handleEditTransaction(event: FormEvent) {
    event.preventDefault()

    updateTransaction(selectedTransaction.id, {
      title,
      amount,
      type,
      category
    })

    setTitle("");
    setType("deposit");
    setAmount(0);
    setCategory("");

    handleCloseNewTransactionModal();
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container onSubmit={ isEditingTransaction ? handleEditTransaction : handleCreateNewTransaction }>
          <h2>{isEditingTransaction ? 'Editar' : 'Cadastrar'} Transação</h2>

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Preço"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              isActive={type === "deposit"}
              activeColor="green"
              onClick={() => setType("deposit")}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              isActive={type === "withdraw"}
              activeColor="red"
              onClick={() => setType("withdraw")}
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  );
}

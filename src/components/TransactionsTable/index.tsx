import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../ModalContext";
import { Transaction, TransactionsContext } from "../../TransactionsContext";
import { Searchbar } from "../SearchBar";
import { Container, FilterContainer, TypeFilterButton } from "./styles";


export function TransactionsTable() {
  const { transactions, handleDeleteTransaction } = useContext(TransactionsContext)
  const { openEditModal } = useContext(ModalContext)
  const [search, setSearch] = useState('')
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions)
  const [typeFilter, setTypeFilter] = useState('none')

  useEffect(() => {
    const newTransactionsView = transactions.filter(transaction => {
      if(typeFilter === 'deposit') {
        return transaction.title.toLowerCase().includes(search) && transaction.type === typeFilter
      } else if (typeFilter === 'withdraw') {
        return transaction.title.toLowerCase().includes(search) && transaction.type === typeFilter
      } else {
        return transaction.title.toLowerCase().includes(search)
      }
    })

    setFilteredTransactions(newTransactionsView);
  }, [search, transactions, typeFilter])

  function handleSearch(value: string) {
    setSearch(value.toLowerCase())
  }

  function handleTypeFilterButton(btnType: string) {
    if(btnType === typeFilter) {
      setTypeFilter('none')
    } else {
      setTypeFilter(btnType)
    } 
  }

  return (
    <>
      <FilterContainer>
        <Searchbar searchValue={search} requestSearch={handleSearch}/>
        <span>Filtrar por: </span>
        <TypeFilterButton
            type="button"
            isActive={typeFilter === "deposit"}
            activeColor="green"
            onClick={() => handleTypeFilterButton('deposit')}
          >
            <span>Entradas</span>
          </TypeFilterButton>

          <TypeFilterButton
            type="button"
            isActive={typeFilter === "withdraw"}
            activeColor="red"
            onClick={() => handleTypeFilterButton('withdraw')}
          >
            <span>Saidas</span>
          </TypeFilterButton>
      </FilterContainer>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
              <th style={{textAlign: 'center'}}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}</td>
                  <td>{transaction.category}</td>
                  <td>
                    {Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                  <td>
                    <div className="actionsCell">
                      <button type="button" onClick={() => openEditModal(transaction)} className='edit'>Editar</button>
                      <button type="button" onClick={() => handleDeleteTransaction(transaction.id)} className='delete'>Excluir</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
}

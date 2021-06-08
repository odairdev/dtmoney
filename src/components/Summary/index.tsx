import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const balance = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.income += transaction.amount
        } else if(transaction.type === 'withdraw') {
            acc.outcome += transaction.amount
        }

        acc.total = acc.income - acc.outcome

        return acc
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(balance.income)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>{balance.outcome === 0 ? '' : '- '}{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(balance.outcome)}</strong>
            </div>

            <div className="highlight-bg" >
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(balance.total)}</strong>
            </div>
        </Container>
    )
}
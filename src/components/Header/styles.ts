import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 0 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1080px) {
        padding: 2rem 1rem 10rem;
    }

    button {
        font-size: 1rem;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.3125rem;
        color: #FFF;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`
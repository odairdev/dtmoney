import styled from 'styled-components'

export const SearchInput = styled.input`
    width: 80%;
    padding: 0 1.5rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
        color: var(--text-body);
    }
`
import styled from 'styled-components'

export const Container = styled.div`
    margin-top: -5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media(max-width: 1080px) {
        margin: -5rem 1rem 0;
    }

    @media(max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
    
    div {
        display: block;
        background-color: var(--shape);
        border-radius: 0.25rem;
        padding: 1.5rem 2rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;   
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

            white-space: nowrap;

            @media(max-width: 800px) {
                font-size: 2.5rem;
                display:flex;
                align-items: center;
                justify-content: center;
            }
        }

        &.highlight-bg {
            background-color: var(--green);
            color: #fff;
        }
    }
`
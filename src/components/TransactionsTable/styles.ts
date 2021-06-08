import styled from "styled-components";
import { darken, transparentize } from "polished";
import { RadioBoxProps, colors } from "../NewTransactionModal/styles";

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media (max-width: 720px) {
      th, td {
        max-width: 1rem;
      }

      th:last-child, td:last-child {
        text-align: center;
      }
    }

    th {
      padding: 1rem 2rem;
      text-align: left;
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem;
      background-color: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      div.actionsCell {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 720px) {
          flex-direction: column;
          gap: 0.5rem;
        }

        button {
          font-size: 1rem;
          font-weight: 600;
          padding: 0 1rem;
          border: 0;
          height: 1.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.2s;
          color: #fff;

          transition: background-color 0.2s, transform 0.4s; 

          &:hover {
            transform: scale(1.08)
          }

          & + button {
            margin-left: 0.25rem;
          }

          &.edit {
            background-color: var(--green);
          }

          &.edit:hover {
            background-color: ${darken(0.05, "#33cc95")};
          }

          &.delete {
            background-color: var(--red);
          }

          &.delete:hover {
            background-color: ${darken(0.05, "#e52e4d")};
          }

          @media (max-width: 720px) {
            width: 5rem;
            & + button {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;

export const FilterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    display: block;
    white-space: nowrap;
    font-size: 1rem;
    margin: 0 0.5rem;
  }

  @media (max-width: 1080px) {
      margin-left: 1rem;
      margin-right: 1rem;
  }
`


export const TypeFilterButton = styled.button<RadioBoxProps>`
  height: 2rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive ? transparentize(0.05, `${colors[props.activeColor]}`) : transparentize(0.8, `${colors[props.activeColor]}`)};

  & + button {
    margin-left: 0.5rem;
  }

  span {
    margin: 0 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
  }

  transition: border-color 0.2s;

  &:hover {
      border-color: #aaa;
  }
`
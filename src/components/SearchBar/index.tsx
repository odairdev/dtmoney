import { SearchInput } from "./style";

interface SearchBarProps {
    searchValue: string;
    requestSearch: (value: string) => void;
}

export function Searchbar({ searchValue, requestSearch }: SearchBarProps) {

    return (
        <SearchInput type="text" placeholder="Buscar Transação..." value={searchValue} onChange={(e) => requestSearch(e.target.value)}/>
    )
}
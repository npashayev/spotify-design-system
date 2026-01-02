import { use } from "react";
import SearchResultsClient from "./components/SearchResultsClient";

interface Props {
    params: Promise<{
        query: string
    }>;
}

export default function SearchResultsPage({ params }: Props) {
    const { query } = use(params);

    return (
        <SearchResultsClient query={query} />
    );
}

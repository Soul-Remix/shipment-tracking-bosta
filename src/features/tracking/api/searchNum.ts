import {SearchNumResponse} from "@/features/tracking/types/SearchNumResponse";

async function searchNum({queryKey}: any): Promise<SearchNumResponse> {
    const [query] = queryKey;

    console.log(query);

    let res = await fetch(`https://tracking.bosta.co/shipments/track/${query}`);
    let data = await res.json();

    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return data;
}

export default searchNum;
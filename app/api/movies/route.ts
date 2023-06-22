import url from "url"; 

// API URLs 
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "@/config";
// Basic fetchlay 
import { basicFetch } from "@/app/api/fetchFunctions";
// Types 
import { Movies } from "@/types";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    let { page, search } = url.parse(req.url, true).query;
    
    const endpoint: string = search
        ? `${SEARCH_BASE_URL}${search}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;

    const data = await basicFetch<Movies>(endpoint);

    return NextResponse.json(data);
}

import { NextRequest, NextResponse } from 'next/server';
import { spotifyFetch } from '@/lib/api/spotifyFetch';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';

    if (!query) {
        return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    try {
        const data = await spotifyFetch(`/search?q=${(query)}&type=album,artist,track`);
        return NextResponse.json(data);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

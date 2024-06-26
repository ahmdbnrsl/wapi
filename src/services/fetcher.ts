'use server';

export async function Fetch({
    number,
    mess
}: {
    number: string;
    mess: string;
}) {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: process.env.NEXT_PUBLIC_SECRET,
            number,
            mess
        })
    };

    await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'bug', option);
}

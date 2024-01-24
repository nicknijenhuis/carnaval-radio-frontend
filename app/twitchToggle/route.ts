import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
const filePath = path.join(process.cwd(), 'public', 'showTwitch.json');

const readShowTwitch = async (): Promise<boolean> => {
    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.showTwitch;
    } catch (error) {
        console.error("Error reading showTwitch:", error);
        return true; // Default value if there's an error
    }
};

const writeShowTwitch = async (value: boolean): Promise<void> => {
    try {
        const data = { showTwitch: value };
        await fs.promises.writeFile(filePath, JSON.stringify(data), { encoding: 'utf-8' });
    } catch (error) {
        console.error("Error writing showTwitch:", error);
    }
};

export async function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get('token');

    // Check if token is valid
    if (token !== process.env.VALID_TOKEN) {
        return Response.json({ message: 'Invalid token' });
    }

    try {
        const currentValue = await readShowTwitch();
        const newValue = !currentValue;
        await writeShowTwitch(newValue);

        return Response.json({ showTwitch: newValue });
    } catch (error) {
        console.error("Error toggling showTwitch:", error);
        return Response.json({ message: 'Error' });
    }
}

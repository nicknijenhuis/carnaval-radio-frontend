'use server'
 
import { revalidatePath, revalidateTag } from 'next/cache'
 
export default async function action(refreshTags: string[]) {
    if (refreshTags.length === 0) {
        revalidateTag("pages");
        revalidateTag("sponsors");
        revalidateTag("team");
        revalidateTag("events");
        revalidateTag("twitch");
        revalidateTag("slides");
        revalidatePath("/sponsoren");
        revalidatePath("/sitemap.xml");
        revalidatePath("/articles");  
        revalidatePath("/team");
        revalidatePath("/events");
        revalidatePath("/");
    } else {
        for (const tagOrPath of refreshTags) {
            if (tagOrPath.startsWith("/")) {
                revalidatePath(tagOrPath);
            } else {
                revalidateTag(tagOrPath);
            }
        }
    }
}
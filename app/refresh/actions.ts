'use server'
 
import { revalidatePath, revalidateTag } from 'next/cache'
 
export default async function action() {
    revalidateTag("articles");
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
}
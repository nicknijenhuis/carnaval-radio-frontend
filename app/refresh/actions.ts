'use server'
 
import { revalidatePath, revalidateTag } from 'next/cache'
 
export default async function action() {
    revalidateTag("articles");
    revalidateTag("pages");
    revalidateTag("sponsors");
    revalidateTag("team");
    revalidatePath("/");
    revalidatePath("/sponsoren");
    revalidatePath("/sitemap.xml");
    revalidatePath("/articles");  
    revalidatePath("/limburg24");
    revalidatePath("/team");
}
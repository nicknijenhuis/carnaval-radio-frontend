'use server'
 
import { revalidatePath, revalidateTag } from 'next/cache'
 
export default async function action() {
    revalidatePath("/");
    revalidatePath("/sponsoren");
    revalidatePath("/sitemap.xml");
    revalidatePath("/articles");  
    revalidatePath("/limburg24");
    revalidateTag("articles");
    revalidateTag("pages");
    revalidateTag("sponsors");
}
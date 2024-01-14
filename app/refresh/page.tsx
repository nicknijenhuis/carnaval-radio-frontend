import { Indie } from "../fonts/font";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
  title: "Refresh | Carnaval Radio | 24/7 Vasteloavend Muzieek",
  description:
    "Doe nu je eigen verzoekje! De vastelaoves Radio | 24/7 Vastelaovend Muzieek",
};

const RevalidatePage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const token = searchParams?.["token"] ?? ""; 
  const validToken = process.env.VALID_TOKEN;

  if (token !== validToken) {
    return (
      <>
        <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
          <div className="p-8 rounded-3xl bg-white max-w-3xl">
            <h2
              className={`text-3xl text-primary mb-5 font-bold ${Indie.className}`}
            >
              Niet toegestaan
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Je hebt geen toegang tot deze pagina. 
            </p>
          </div>
        </div>
      </>
    );
  }

  revalidatePath("/");
  revalidatePath("/sponsoren");
  revalidatePath("/sitemap.xml");
  revalidatePath("/articles");

  return (
    <>
      <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
          <div className="p-8 rounded-3xl bg-white max-w-3xl">
            <h2
              className={`text-3xl text-primary mb-5 font-bold ${Indie.className}`}
            >
              Gelukt
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Gegevens ververst.
            </p>
          </div>
        </div>
    </>
  );
};

export default RevalidatePage;

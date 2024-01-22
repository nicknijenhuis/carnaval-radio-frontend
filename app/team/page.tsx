import TeamMemberComponent from "@/components/Team/TeamMember";
import { TeamMember } from "@/types/teamTypes";
import { GET_TEAM_DATA } from "@/GlobalState/ApiCalls/graphql/team_queries";
import { client } from "@/GlobalState/ApiCalls/api.config";

export async function generateMetadata() {
  return {
    title: `Team | Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

const page = async () => {
  const { data } = await client.query({
    query: GET_TEAM_DATA,
    context: {
      fetchOptions: {
        next: { tags: ["team"] },
      },
    },
  });

  const teamMembers: TeamMember[] | undefined = data?.team?.data;

  if (!teamMembers) {
    return null;
  }

  return (
    <>
<div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Ons team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Ontmoet de mensen achter Carnaval Radio. We zijn een team van vrijwilligers die zich inzetten voor de vastelaovend.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
            {teamMembers.map((item, i) => (
              <TeamMemberComponent key={item.attributes.Name} data={item} index={i} />
            ))}
        </ul>
      </div>
    </div>      
    </>
  );
};

export default page;

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

  if(!teamMembers) {
    return null;
  }
  
  return (
    <>
      <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[85px] pt-[67px] md:mt-[27px] mt-2 pb-10">
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((item) =>
              <TeamMemberComponent key={item.attributes.Name} data={item} />
            )}
          </div>
        </div>
      </section>      
    </>
  );
}

export default page;

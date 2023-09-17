import { GET_THEME_DATA } from "./graphql/theme_queries";
import { client } from "./api.config";

export const fetchThemeColors = async () => {
  try {
    const { data } = await client.query({
      query: GET_THEME_DATA,
    });
    let theme = data.theme.data.attributes;
    return {
      primary: theme.BaseColor,
      primaryShade_1: "#FF9D0029",
      primaryShade_2: "#F2F4E6",
      primaryShade_3: "#FFFCF3",
      secondary: "#FF1809",
      secondayShade_1: "#FFEFEB",
      secondayShade_2: "#FFF9F8",
      heroBackground: "#f9f9f9",
      sideBbarBackground: "#fcfdfe",
      activeTab: "#f2f4e6",
      green: "#0CAE12",
      greenShade_1: "#1DC72429",
      greenShade_2: "#F3FFF4",
    };
  } catch (error) {
    console.error("Error fetching colors:", error);
    return {};
  }
};

async () => {
  const themeColors = await fetchThemeColors();
};

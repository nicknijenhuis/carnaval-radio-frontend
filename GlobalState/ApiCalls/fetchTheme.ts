import { client } from "./api.config";
import { GET_THEME_DATA } from "./graphql/theme_queries";

export const fetchThemeData = async () => {
  try {
    const { data: themeDataStrapi } = await client.query({
      query: GET_THEME_DATA,
    });
    return themeDataStrapi;
  } catch (error) {
    console.log(error);
  }
};

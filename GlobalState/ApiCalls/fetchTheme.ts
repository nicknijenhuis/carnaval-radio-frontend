import { client } from "./api.config";
import { GET_THEME_DATA } from "./graphql/theme_queries";

export const fetchThemeData = async () => {
  let themeData: any;
  try {
    const { data } = await client.query({
      query: GET_THEME_DATA,
    });
    themeData = data.theme.data;
  } catch (error) {
    console.log(error);
  }
  return themeData;
};

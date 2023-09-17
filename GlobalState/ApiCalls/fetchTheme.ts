import { GET_THEME_DATA } from "./graphql/theme_queries";
import { client } from "./api.config";

let theme: any;
export const fetchThemeData = async () => {
  try {
    const { data } = await client.query({
      query: GET_THEME_DATA,
    });
    theme = data.theme.data.attributes;
    return data.theme.data;
  } catch (error) {
    console.log(error);
  }
};

export const themeData = theme;

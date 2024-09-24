type Theme = {
    slug: string;
    name: string;
    logo: string;
    colors: {
        primary: string;
        primaryShade_1: string;
        primaryShade_2: string;
        primaryShade_3: string;
        secondary: string;
        secondayShade_1: string;
        secondayShade_2: string;
        heroBackground: string;
        sideBbarBackground: string;
        activeTab: string;
        tertiary: string;
        tertiaryShade_1: string;
        tertiaryShade_2: string;
    };
};

const carnavalRadio: Theme = {
    slug: "carnaval",
    name: "Carnaval Radio",
    logo: "/images/logo.png",
    colors: {
        primary: "#FF9D00",            // Bright Orange
        primaryShade_1: "#FF9D0029",   // Light Transparent Orange
        primaryShade_2: "#F2F4E6",     // Light Beige
        primaryShade_3: "#FFFCF3",     // Very Pale Cream
        secondary: "#FF1809",          // Vivid Red
        secondayShade_1: "#FFEFEB",    // Light Pinkish Beige
        secondayShade_2: "#FFF9F8",    // Very Pale Pink
        heroBackground: "#f9f9f9",     // Very Light Gray
        sideBbarBackground: "#fcfdfe", // Almost White with a Hint of Blue
        activeTab: "#f2f4e6",          // Light Beige (same as primaryShade_2)
        tertiary: "#0CAE12",           // Bright Green
        tertiaryShade_1: "#1DC72429",  // Light Transparent Green
        tertiaryShade_2: "#F3FFF4",    // Very Pale Mint Green
    },
};

const oktoberfestRadio: Theme = {
    slug: "oktoberfest",
    name: "Oktoberfest Radio",
    logo: "/images/logo.png",
    colors: {
        primary: "#3399FF",               // Slightly lighter blue
        primaryShade_1: "#3399FF29",      // Transparent shade of the new primary color
        primaryShade_2: "#EAF4FF",        // Adjusted lighter blue shade
        primaryShade_3: "#F5FAFF",        // Very light shade of blue
        secondary: "#004A99",             // Darker blue
        secondayShade_1: "#FFEFEB",       // Light yellow shade
        secondayShade_2: "#FFF8E1",       // Even lighter yellow shade
        heroBackground: "#f9f9f9",        // Very light cream
        sideBbarBackground: "#fcfdfe",    // Faint pastel blue
        activeTab: "#f2f4e6",             // Delicate off-white with a hint of blue
        tertiary: "#E53935",              // Red replacing the green
        tertiaryShade_1: "#FFCDD2",       // Light red shade
        tertiaryShade_2: "#FFEBEE",       // Even lighter red shade
    },
};

const themes: Theme[] = [carnavalRadio, oktoberfestRadio];

export function getThemeOrDefault(slug?: string): Theme {
    const selectedThemeSlug = slug || 'carnaval';

    // Find the matching theme or default to 'carnaval-radio'
    const theme = themes.find((theme) => theme.slug === selectedThemeSlug) || themes[0];

    return theme;
}

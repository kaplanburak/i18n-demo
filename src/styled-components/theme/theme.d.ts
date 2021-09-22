export interface ITheme {
    colors: IColors;
    shadows: IShadows;
}

interface IColors {
    quickloadOrange: string;
    quickloadBlue: string;
    quickloadOrangeLight: string;
    quickloadBlueLight: string;
    eclipse: string;
    red: string;
    green: string;
    lightGray: string;
    chYellow: string;
    chOrange: string;
    chDarkBlue: string;
    chLightGray: string;
    chBlue: string;
    chRed: string;
    chGray: string;
}

interface IShadows {
    cardShadow: string;
    cardShadowHover: string;
}

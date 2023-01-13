export interface SponsorType {
    Id: string
    Name: string
    Order: number
    LogoSize: string
}

export interface Sponsor {
    Name: string
    Logo: Image
    Type: SponsorType
}

export interface Image {
    Src: string
    Width: string
    Height: string
}
export interface Car {
    id: string
    title: string
    price: number
    image: string
    images: string[]
    year: number
    mileage: number
    fuel: string
    transmission: string
    power: string
    engine: string
    slug: string
    description: string
}

export const CARS: Car[] = [
    {
        id: "1",
        title: "Mercedes-Benz A250e AMG Designo Grau",
        price: 31950,
        image: "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc08053-high-6cr156.jpg",
        images: [
            "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc08053-high-6cr156.jpg"
        ],
        year: 2021,
        mileage: 85950,
        fuel: "Hybride",
        transmission: "Automaat",
        power: "218 pk",
        engine: "1.3 Turbo",
        slug: "mercedes-benz-a250e-amg-designo-grau",
        description: "Een prachtige Mercedes-Benz A250e AMG uitgevoerd in Designo Grau. Voorzien van alle denkbare opties."
    },
    {
        id: "2",
        title: "Audi A3 40 TFSI-e S-Line",
        price: 32495,
        image: "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/3c1dc26a-d164-480e-b9db-d8cadd6e70c9_50774af9-cad9-4048-9048-5dfb1cc2c781-high-h8gz0a.jpg",
        images: [
            "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/3c1dc26a-d164-480e-b9db-d8cadd6e70c9_50774af9-cad9-4048-9048-5dfb1cc2c781-high-h8gz0a.jpg"
        ],
        year: 2021,
        mileage: 64200,
        fuel: "Hybride",
        transmission: "Automaat",
        power: "204 pk",
        engine: "1.4 TFSI",
        slug: "audi-a3-40-tfsi-e-s-line",
        description: "Sportieve Audi A3 40 TFSI-e S-Line. De perfecte combinatie van prestaties en zuinigheid."
    },
    {
        id: "3",
        title: "Audi A3 45 TFSI-e S-Line",
        price: 28495,
        image: "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc07736-high-gkem1h.jpg",
        images: [
            "https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc07736-high-gkem1h.jpg"
        ],
        year: 2021,
        mileage: 73700,
        fuel: "Hybride",
        transmission: "Automaat",
        power: "245 pk",
        engine: "1.4 TFSI",
        slug: "audi-a3-45-tfsi-e-s-line",
        description: "De krachtige Audi A3 45 TFSI-e S-Line. Voorzien van een sportief interieur en exterieur."
    }
]

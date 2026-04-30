export interface Program {
  id: number;
  name: string;
  type: "Undergraduate" | "Postgraduate" | "Foundation";
}
 
export interface University {
  id: number;
  name: string;
  city: string;
  country: string;
  rating: number;
  qsRank: string;
  programsCount: number;
  description: string;
  about: string;
  programs: Program[];
  image: string;
}
 
export const TYPE_LABELS: Record<Program["type"], string> = {
  Undergraduate: "Undergraduate",
  Postgraduate: "Postgraduate",
  Foundation: "Foundation",
};
 
 
export const UNIVERSITIES: University[] = [
  {
    id: 1,
    name: "Университет Окленда",
    city: "Окленд",
    country: "Новая Зеландия",
    rating: 4.8,
    qsRank: "QS Top 100",
    programsCount: 50,
    description:
      "Университет Окленда — ведущий исследовательский университет Новой Зеландии, предлагающий широкий спектр программ бакалавриата и магистратуры.",
    about:
      "Университет предлагает современные учебные программы, передовые исследования и отличные возможности для карьерного роста. Кампус расположен в самом сердце Окленда, предоставляя студентам доступ к лучшим ресурсам и возможностям.",
    programs: [
      { id: 1, name: "Бакалавриат по Бизнесу", type: "Undergraduate" },
      { id: 2, name: "Магистратура по Инженерии", type: "Postgraduate" },
      { id: 3, name: "Foundation Program", type: "Foundation" },
    ],
    image: "/image/country.png",
  },
  {
    id: 2,
    name: "Университет Кентербери",
    city: "Крайстчерч",
    country: "Новая Зеландия",
    rating: 4.8,
    qsRank: "QS Top 250",
    programsCount: 45,
    description:
      "Один из ведущих университетов Новой Зеландии с богатой историей и сильными исследовательскими традициями.",
    about:
      "Университет Кентербери известен своими инженерными и естественнонаучными программами. Расположен в Крайстчерче — «Садовом городе» Новой Зеландии.",
    programs: [
      { id: 1, name: "Бакалавриат по Инженерии", type: "Undergraduate" },
      { id: 2, name: "Магистратура по IT", type: "Postgraduate" },
      { id: 3, name: "Foundation Sciences", type: "Foundation" },
    ],
    image: "/image/country.png",
  },
  {
    id: 3,
    name: "Университет Отаго",
    city: "Данидин",
    country: "Новая Зеландия",
    rating: 4.8,
    qsRank: "QS Top 200",
    programsCount: 40,
    description:
      "Старейший университет Новой Зеландии, известный своими медицинскими и гуманитарными программами.",
    about:
      "Университет Отаго основан в 1869 году и является флагманом высшего образования страны. Предлагает уникальный студенческий опыт в живописном Данидине.",
    programs: [
      { id: 1, name: "Бакалавриат по Медицине", type: "Undergraduate" },
      { id: 2, name: "Магистратура по Праву", type: "Postgraduate" },
      { id: 3, name: "Foundation Arts", type: "Foundation" },
    ],
    image: "/image/country.png",
  },
];
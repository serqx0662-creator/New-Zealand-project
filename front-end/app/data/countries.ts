

export interface CountryProgram {
  id: string;
  title: string;
  university: string;
  pricePerYear: number;
  currency?: string;
}

export interface CountryFact {
  label: string;
  value: string;
}

export interface CountryFeature {
  title: string;
  description: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  universitiesCount: number;
  programsCount: number;
  studentsCount: number;
  facts: CountryFact[];
  features: CountryFeature[];
  programs: CountryProgram[];
}



export const countries: Country[] = [
  {
    id: "1",
    name: "Новая Зеландия",
    slug: "new-zealand",
    description:
      "Новая Зеландия предлагает высококачественное образование в безопасной и дружелюбной среде. Университеты страны входят в топ-3% лучших университетов мира.",
    shortDescription:
      "Высококачественное образование в одной из самых безопасных стран мира",
    imageUrl: "/image/country.png",
    universitiesCount: 8,
    programsCount: 150,
    studentsCount: 5000,
    facts: [
      { label: "Столица", value: "Веллингтон" },
      { label: "Учебный год", value: "Февраль-Ноябрь" },
      { label: "Валюта", value: "NZD" },
    ],
    features: [
      {
        title: "Безопасность",
        description: "Одна из самых безопасных стран мира",
      },
      {
        title: "Качество",
        description: "Университеты в топ-3% мира",
      },
    ],
    programs: [
      {
        id: "nz-1",
        title: "Бакалавриат по Бизнесу",
        university: "Университет Окленда",
        pricePerYear: 20000,
        currency: "USD",
      },
      {
        id: "nz-2",
        title: "Магистратура по Инженерии",
        university: "Университет Кентербери",
        pricePerYear: 25000,
        currency: "USD",
      },
    ],
  },
  {
    id: "2",
    name: "Великобритания",
    slug: "uk",
    description:
      "Великобритания — родина классического университетского образования. Британский диплом признаётся работодателями по всему миру и открывает двери в лучшие компании.",
    shortDescription: "Классическое британское образование с богатой историей",
    imageUrl: "/image/country.png",
    universitiesCount: 15,
    programsCount: 300,
    studentsCount: 15000,
    facts: [
      { label: "Столица", value: "Лондон" },
      { label: "Учебный год", value: "Сентябрь-Июнь" },
      { label: "Валюта", value: "GBP" },
    ],
    features: [
      {
        title: "Престиж",
        description: "Оксфорд и Кембридж — лучшие университеты мира",
      },
      {
        title: "Признание",
        description: "Диплом ценится в 190+ странах",
      },
    ],
    programs: [
      {
        id: "uk-1",
        title: "Бакалавриат по Праву",
        university: "Университет Лондона",
        pricePerYear: 22000,
        currency: "USD",
      },
      {
        id: "uk-2",
        title: "Магистратура по Финансам",
        university: "Лондонская школа экономики",
        pricePerYear: 30000,
        currency: "USD",
      },
    ],
  },
  {
    id: "3",
    name: "Австралия",
    slug: "australia",
    description:
      "Австралия сочетает высокое качество образования с отличным уровнем жизни. Восемь австралийских университетов входят в топ-100 лучших университетов мира.",
    shortDescription:
      "Престижные университеты мирового уровня с отличными перспективами",
    imageUrl: "/image/country.png",
    universitiesCount: 12,
    programsCount: 200,
    studentsCount: 8000,
    facts: [
      { label: "Столица", value: "Канберра" },
      { label: "Учебный год", value: "Февраль-Ноябрь" },
      { label: "Валюта", value: "AUD" },
    ],
    features: [
      {
        title: "Топ-100",
        description: "8 университетов в мировом рейтинге топ-100",
      },
      {
        title: "Иммиграция",
        description: "Возможность получить ПМЖ после учёбы",
      },
    ],
    programs: [
      {
        id: "au-1",
        title: "Бакалавриат по IT",
        university: "Университет Мельбурна",
        pricePerYear: 18000,
        currency: "USD",
      },
      {
        id: "au-2",
        title: "Магистратура по Медицине",
        university: "Университет Сиднея",
        pricePerYear: 35000,
        currency: "USD",
      },
    ],
  },
  {
    id: "4",
    name: "Новая Зеландия",
    slug: "new-zealand",
    description:
      "Новая Зеландия предлагает высококачественное образование в безопасной и дружелюбной среде. Университеты страны входят в топ-3% лучших университетов мира.",
    shortDescription:
      "Высококачественное образование в одной из самых безопасных стран мира",
    imageUrl: "/image/country.png",
    universitiesCount: 8,
    programsCount: 150,
    studentsCount: 5000,
    facts: [
      { label: "Столица", value: "Веллингтон" },
      { label: "Учебный год", value: "Февраль-Ноябрь" },
      { label: "Валюта", value: "NZD" },
    ],
    features: [
      {
        title: "Безопасность",
        description: "Одна из самых безопасных стран мира",
      },
      {
        title: "Качество",
        description: "Университеты в топ-3% мира",
      },
    ],
    programs: [
      {
        id: "nz-1",
        title: "Бакалавриат по Бизнесу",
        university: "Университет Окленда",
        pricePerYear: 20000,
        currency: "USD",
      },
      {
        id: "nz-2",
        title: "Магистратура по Инженерии",
        university: "Университет Кентербери",
        pricePerYear: 25000,
        currency: "USD",
      },
    ],
  },
  {
    id: "5",
    name: "Великобритания",
    slug: "uk",
    description:
      "Великобритания — родина классического университетского образования. Британский диплом признаётся работодателями по всему миру и открывает двери в лучшие компании.",
    shortDescription: "Классическое британское образование с богатой историей",
    imageUrl: "/image/country.png",
    universitiesCount: 15,
    programsCount: 300,
    studentsCount: 15000,
    facts: [
      { label: "Столица", value: "Лондон" },
      { label: "Учебный год", value: "Сентябрь-Июнь" },
      { label: "Валюта", value: "GBP" },
    ],
    features: [
      {
        title: "Престиж",
        description: "Оксфорд и Кембридж — лучшие университеты мира",
      },
      {
        title: "Признание",
        description: "Диплом ценится в 190+ странах",
      },
    ],
    programs: [
      {
        id: "uk-1",
        title: "Бакалавриат по Праву",
        university: "Университет Лондона",
        pricePerYear: 22000,
        currency: "USD",
      },
      {
        id: "uk-2",
        title: "Магистратура по Финансам",
        university: "Лондонская школа экономики",
        pricePerYear: 30000,
        currency: "USD",
      },
    ],
  },
  {
    id: "6",
    name: "Австралия",
    slug: "australia",
    description:
      "Австралия сочетает высокое качество образования с отличным уровнем жизни. Восемь австралийских университетов входят в топ-100 лучших университетов мира.",
    shortDescription:
      "Престижные университеты мирового уровня с отличными перспективами",
    imageUrl: "/image/country.png",
    universitiesCount: 12,
    programsCount: 200,
    studentsCount: 8000,
    facts: [
      { label: "Столица", value: "Канберра" },
      { label: "Учебный год", value: "Февраль-Ноябрь" },
      { label: "Валюта", value: "AUD" },
    ],
    features: [
      {
        title: "Топ-100",
        description: "8 университетов в мировом рейтинге топ-100",
      },
      {
        title: "Иммиграция",
        description: "Возможность получить ПМЖ после учёбы",
      },
    ],
    programs: [
      {
        id: "au-1",
        title: "Бакалавриат по IT",
        university: "Университет Мельбурна",
        pricePerYear: 18000,
        currency: "USD",
      },
      {
        id: "au-2",
        title: "Магистратура по Медицине",
        university: "Университет Сиднея",
        pricePerYear: 35000,
        currency: "USD",
      },
    ],
  },
];
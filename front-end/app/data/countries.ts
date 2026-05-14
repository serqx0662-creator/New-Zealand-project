

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




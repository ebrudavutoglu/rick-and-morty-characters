export type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  image: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};

export type CharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export type GetCharactersParams = {
  page?: number;
  name?: string;
  status?: string;
  gender?: string;
};

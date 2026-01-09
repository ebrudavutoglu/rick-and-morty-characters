import { useQuery } from '@tanstack/react-query';
import { getCharacterById, getCharacters } from '@/services/endpoints';
import { GetCharactersParams } from '@/types/character';

export const useCharactersQuery = (params: GetCharactersParams) =>
  useQuery({
    queryKey: ['characters', params],
    queryFn: () => getCharacters(params),
  });

export const useCharacterByIdQuery = (id: string) =>
  useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
  });

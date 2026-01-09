import { Character, CharactersResponse } from '@/types/character';
import { request } from './http.client';
import { PaginationParams, SearchParams, SortParams } from '@/types/param';

export type GetCharacterParams = PaginationParams & SearchParams & SortParams;

export const getCharacters = (params: GetCharacterParams) =>
  request<CharactersResponse>('/character', {
    params,
  });

export const getCharacterById = (id: string) =>
  request<Character>(`/character/${id}`);

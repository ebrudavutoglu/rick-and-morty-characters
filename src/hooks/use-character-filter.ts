'use client';

import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';

export function useCharacterFilters() {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withOptions({
      shallow: false,
    })
  );

  const [name, setName] = useQueryState(
    'name',
    parseAsString.withOptions({
      shallow: false,
    })
  );

  const [status, setStatus] = useQueryState(
    'status',
    parseAsString.withOptions({
      shallow: false,
    })
  );

  const [gender, setGender] = useQueryState(
    'gender',
    parseAsString.withOptions({
      shallow: false,
    })
  );

  return {
    page,
    name,
    status,
    gender,
    setPage,
    setName,
    setStatus,
    setGender,
  };
}

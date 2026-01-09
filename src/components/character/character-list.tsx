'use client';
import { useCharacterFilters } from '@/hooks/use-character-filter';
import { useCharactersQuery } from '@/queries/character';
import CharacterCard from './character-card';
import { ButtonGroup } from '../ui/button-group';
import { Button } from '../ui/button';
import { CharacterCardSkeleton } from './character-skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import CharacterDetailModal from './character-detail-modal';

const CharacterList = () => {
  const filters = useCharacterFilters();

  const { data, isLoading } = useCharactersQuery({
    page: filters.page as number,
    name: filters.name || undefined,
    status: filters.status || undefined,
    gender: filters.gender || undefined,
  });

  return (
    <div className="container mx-5">
      <div className="flex justify-end gap-4">
        <Input
          placeholder="İsim ara"
          value={String(filters.name)}
          onChange={(e) => {
            filters.setPage(1);
            filters.setName(e.target.value);
          }}
        />

        <Select
          onValueChange={(e) => {
            filters.setPage(1);
            filters.setGender(e);
          }}
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Cinsiyet Seç" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Erkek</SelectItem>
            <SelectItem value="female">Kadın</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(e) => {
            filters.setPage(1);
            filters.setStatus(e);
          }}
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Statü Seç" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alive">Fani</SelectItem>
            <SelectItem value="dead">Ölü</SelectItem>
            <SelectItem value="unknown">Bilinmeyen</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="secondary"
          onClick={() => {
            filters.setName('');
            filters.setGender('');
            filters.setStatus('');
            filters.setPage(1);
          }}
        >
          Temizle
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <CharacterCardSkeleton key={i} />
          ))}

        {data?.results?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="flex gap-2 mt-4 justify-end">
        <ButtonGroup>
          <Button
            onClick={() => filters.setPage((filters.page as number) - 1)}
            disabled={(filters.page as number) <= 1}
          >
            Geri
          </Button>
          <Button onClick={() => filters.setPage((filters.page as number) + 1)}>
            İleri
          </Button>
        </ButtonGroup>
      </div>
      <CharacterDetailModal />
    </div>
  );
};

export default CharacterList;

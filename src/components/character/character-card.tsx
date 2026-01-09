'use client';
import { useCharacterStore } from '@/store/character';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Character } from '@/types/character';
import Image from 'next/image';

const CharacterCard = ({ character }: { character: Character }) => {
  const { openDetail } = useCharacterStore();

  return (
    <Card
      onClick={() => {
        openDetail(character.id);
      }}
    >
      <CardHeader>
        <CardTitle>{character.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
        />
      </CardContent>
      <CardFooter className="w-full">
        <div className="flex items-center justify-between border-t px-3 py-2 text-xs w-full">
          {/* Status */}
          <span
            className={`
      inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium
      ${
        character.status === 'Alive'
          ? 'bg-green-100 text-green-700'
          : character.status === 'Dead'
            ? 'bg-red-100 text-red-700'
            : 'bg-gray-100 text-gray-600'
      }
    `}
          >
            <span
              className={`
        h-2 w-2 rounded-full
        ${
          character.status === 'Alive'
            ? 'bg-green-500'
            : character.status === 'Dead'
              ? 'bg-red-500'
              : 'bg-gray-400'
        }
      `}
            />
            {character.status}
          </span>

          {/* Gender */}
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
            {character.gender}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;

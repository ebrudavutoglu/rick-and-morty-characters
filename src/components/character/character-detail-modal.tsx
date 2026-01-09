'use client';
import { useCharacterByIdQuery } from '@/queries/character';
import { useCharacterStore } from '@/store/character';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Character } from '@/types/character';
import Image from 'next/image';

const CharacterDetailModal = () => {
  const { isDetailOpen, selectedId, closeDetail } = useCharacterStore();
  const { data, isLoading } = useCharacterByIdQuery(String(selectedId));

  return (
    <Dialog open={isDetailOpen} onOpenChange={closeDetail}>
      <DialogContent>
        <DialogTitle>{data?.name ?? 'Character detail'}</DialogTitle>

        {isLoading ? (
          <p>Yükleniyor</p>
        ) : (
          data && (
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={96}
                  height={96}
                  className="rounded-lg"
                />

                <div>
                  <h2 className="text-lg font-semibold leading-tight">
                    {data.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-2">
                    <StatusBadge status={data.status} />
                    <GenderBadge gender={data.gender} />
                  </div>
                </div>
              </div>

              <Separator />

              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">{data.species}</span>
                  <span className="font-medium">{data.species}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    {data.origin.name}
                  </span>
                  <span className="font-medium">{data.origin.name}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    {data.location.name}
                  </span>
                  <span className="font-medium">{data.location.name}</span>
                </li>
              </ul>
            </div>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDetailModal;

function StatusBadge({ status }: { status: Character['status'] }) {
  const styles =
    status === 'Alive'
      ? 'bg-green-100 text-green-700'
      : status === 'Dead'
        ? 'bg-red-100 text-red-700'
        : 'bg-gray-100 text-gray-600';

  return <Badge className={styles}>{status}</Badge>;
}

function GenderBadge({ gender }: { gender: Character['gender'] }) {
  return <Badge variant="secondary">{gender}</Badge>;
}

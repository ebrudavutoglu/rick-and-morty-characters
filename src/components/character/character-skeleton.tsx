import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export function CharacterCardSkeleton() {
  return (
    <Card className="pointer-events-none">
      <CardHeader>
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
      </CardHeader>
      <CardContent>
        <div className="aspect-square w-full animate-pulse rounded-md bg-slate-200" />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between border-t px-3 py-2 text-xs">
          <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200" />
          <div className="h-5 w-14 animate-pulse rounded-full bg-slate-200" />
        </div>
      </CardFooter>
    </Card>
  );
}

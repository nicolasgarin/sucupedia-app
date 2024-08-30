"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteSucu } from "@/app/sucus/sucus.api";
import { useRouter } from "next/navigation";

export function SucuCard({ sucu }: any) {
  const router = useRouter();

  async function handleDeleteSucu(id: number) {
    await deleteSucu(id);
    router.refresh();
  }

  return (
    <Card onClick={() => router.push(`/sucus/${sucu.id}`)}>
      <div
        className="w-full h-48 bg-slate-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${sucu.image})` }}
      ></div>
      <CardContent>
        <CardTitle>{sucu.name}</CardTitle>
        <CardFooter className="flex justify-between">
          <Button variant="default">Ver</Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteSucu(sucu.id);
            }}
            variant="destructive"
          >
            Delete
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

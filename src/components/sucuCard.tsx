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
    <Card className="bg-violet-900 border-violet-950">
      <div
        className="w-full h-48 bg-slate-200 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${sucu.image})` }}
      ></div>
      <CardContent className="p-6">
        <CardTitle className="text-violet-300">{sucu.name}</CardTitle>
        <CardFooter className="flex justify-between p-0">
          <Button onClick={() => router.push(`/sucus/${sucu.id}`)} variant="default">Ver</Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteSucu(sucu.id);
            }}
            variant="destructive"
          >
            x
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

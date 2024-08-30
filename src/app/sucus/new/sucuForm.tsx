"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createSucu, editSucu } from "../sucus.api";
import { useParams, useRouter } from "next/navigation";

export function SucuForm({ sucu }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: sucu?.name,
      description: sucu?.description,
      image: sucu?.image,
    },
  });
  const router = useRouter();
  const params = useParams<any>();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await editSucu(parseInt(params.id), data);
    } else {
      await createSucu(data);
    }
    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Sucu name</Label>
      <Input {...register("name")} />
      <Label>Sucu description</Label>
      <Input {...register("description")} />
      <Label>Sucu image</Label>
      <Input {...register("image")} />
      <Button>{params.id ? "Editar sucu" : "Registar sucu"}</Button>
    </form>
  );
}

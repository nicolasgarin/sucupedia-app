"use client";
import { getSucu } from "@/app/sucus/sucus.api";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        id: number;
    };
};

async function SucuDetailPage({ params }: Props) {
    const router = useRouter();

  const sucu = await getSucu(params.id);

  return (<div className="">
    <Link href="/" className={buttonVariants({ variant: "default" })}>Volver</Link>
    <h1>{sucu.name}</h1>
    <img src={sucu.image} alt={sucu.name} />
    <p>{sucu.description}</p>
    <Button variant="default" onClick={() => {
        router.push(`/sucus/${sucu.id}/edit`);
    }}>Editar</Button>
  </div>);
}

export default SucuDetailPage;

const BACKEND_URL = process.env.BACKEND_URL;

export async function getSucus() {
  const data = await fetch(`${BACKEND_URL}/api/sucus`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function getSucu(id: number) {
  const data = await fetch(`${BACKEND_URL}/api/sucus/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createSucu(sucuData: any) {
  const res = await fetch(`${BACKEND_URL}/api/sucus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sucuData),
  });
  const data = await res.json();
}

export async function editSucu(id: number, sucuData: any) {
  const res = await fetch(`${BACKEND_URL}/api/sucus/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
    body: JSON.stringify(sucuData),
  });
  const data = await res.json();
}

export async function deleteSucu(id: number) {
  const res = await fetch(`http://localhost:4000/api/sucus/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
}
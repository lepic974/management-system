"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const [customerData, setCustomerData] = useState<any>(null);

  useEffect(() => {
    if (token) {
      axios
        .get(`/api/success`, { params: { token } })
        .then((response) => setCustomerData(response.data))
        .catch((error) => console.error(error));
    }
  }, [token]);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-3 text-center">
      <h1 className="py-8 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
        ✅ Paiement réussi avec succés !
      </h1>
      {customerData ? (
        <div className="">
          <p>Merci pour votre achat, {customerData?.name}</p>
          <ul>
            <li>Email: {customerData?.email}</li>
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

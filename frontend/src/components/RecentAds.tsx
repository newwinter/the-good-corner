import { totalmem } from "os";
import React, { useEffect, useState } from "react";
import AdCard, { AdCardProps } from "./AdCard";
import { useSearchParams } from "next/navigation";
import axios from "../../node_modules/axios/index";
import { Ad } from "@/types/ad.types"

const RecentAds = () => {
  // const ads: AdCardProps[] = [
  //   {
  //     imgURL: "/images/table.webp",
  //     link: "/ad/table",
  //     price: 120,
  //     title: "table",
  //     category: "meuble",
  //   },
  //   {
  //     imgURL: "/images/dame-jeanne.webp",
  //     link: "/ad/dame-jeanne",
  //     price: 75,
  //     title: "dame-jeanne",
  //     category: "objet",
  //   },
  //   {
  //     imgURL: "/images/vide-poche.webp",
  //     link: "/ad/vide-poche",
  //     price: 4,
  //     title: "vide-poche",
  //     category: "objet",
  //   },
  //   {
  //     imgURL: "/images/vaisselier.webp",
  //     link: "/ad/vaissellier",
  //     price: 900,
  //     title: "vaisselier",
  //     category: "meuble",
  //   },
  //   {
  //     imgURL: "/images/bougie.webp",
  //     link: "/ad/bougie",
  //     price: 8,
  //     title: "bougie",
  //     category: "objet",
  //   },
  //   {
  //     imgURL: "/images/porte-magazine.webp",
  //     link: "/ad/porte-magazine",
  //     price: 45,
  //     title: "porte-magazine",
  //     category: "objet",
  //   },
  // ];

  const [total, setTotal] = useState<number>(0);
  const [ads, setAds] = useState<Ad[]>([]);

  const totalPrice = (price: number) => {
    setTotal(total + price);
  };

  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<Ad[]>(`http://localhost:5001/ads?categoryId=${categoryId}`);
        setAds(result.data)
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Prix total: {total} € </p>
      <section className="recent-ads">
        {ads.map((ad, index) => (
          <div key={index}>
            <AdCard
              imgURL={ad.picture}
              link={`/ads/${ad.id}`}
              price={ad.price} 
              title={ad.title}
            />
            <button className="button" onClick={() => totalPrice(ad.price)}>
              Add price to total
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentAds;

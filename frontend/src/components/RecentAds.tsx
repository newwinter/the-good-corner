import React from "react";
import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const ads: AdCardProps[] = [
    {
      imgURL: "/images/table.webp",
      link: "/ad/table",
      price: 120,
      title: "table",
      category: "meuble",
    },
    {
      imgURL: "/images/dame-jeanne.webp",
      link: "/ad/dame-jeanne",
      price: 75,
      title: "dame-jeanne",
      category: "objet",
    },
    {
      imgURL: "/images/vide-poche.webp",
      link: "/ad/vide-poche",
      price: 4,
      title: "vide-poche",
      category: "objet",
    },
    {
      imgURL: "/images/vaisselier.webp",
      link: "/ad/vaissellier",
      price: 900,
      title: "vaisselier",
      category: "meuble",
    },
    {
      imgURL: "/images/bougie.webp",
      link: "/ad/bougie",
      price: 8,
      title: "bougie",
      category: "objet",
    },
    {
      imgURL: "/images/porte-magazine.webp",
      link: "/ad/porte-magazine",
      price: 45,
      title: "porte-magazine",
      category: "objet",
    },
  ];
  return (
    <section className="recent-ads">
      {ads.map((ad, index) => (
        <AdCard
          key={index}
          imgURL={ad.imgURL}
          link={ad.link}
          price={ad.price}
          title={ad.title}
          category={ad.category}
        />
      ))}
    </section>
  );
};

export default RecentAds;

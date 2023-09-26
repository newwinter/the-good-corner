import React from "react";
import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const ads: AdCardProps[] = [
    {
      imgURL: "/images/table.webp",
      link: "/ads/table",
      price: 120,
      title: "table",
    },
    {
      imgURL: "/images/dame-jeanne.webp",
      link: "/ads/dame-jeanne",
      price: 75,
      title: "dame-jeanne",
    },
    {
      imgURL: "/images/vide-poche.webp",
      link: "/ads/vide-poche",
      price: 4,
      title: "vide-poche",
    },
    {
      imgURL: "/images/vaissellier.webp",
      link: "/ads/vaissellier",
      price: 900,
      title: "vaisselier",
    },
    {
      imgURL: "/images/bougie.webp",
      link: "/ads/bougie",
      price: 8,
      title: "bougie",
    },
    {
      imgURL: "/images/porte-magazine.webp",
      link: "/ads/porte-magazine",
      price: 45,
      title: "porte-magazine",
    },
  ];
  return (
    <>
      <h2>Annonces récentes</h2>
      {ads.map((ad, i) => (
        <AdCard
          key={i}
          imgURL={ad.imgURL}
          link={ad.link}
          price={ad.price}
          title={ad.title}
        />
      ))}
    </>
  );
};

export default RecentAds;

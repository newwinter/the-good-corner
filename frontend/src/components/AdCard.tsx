import React from "react";

export type AdCardProps = {
  title: string;
  imgURL: string;
  price: number;
  link: string;
  category: string;
}

const AdCard = ({ title, imgURL, price, link, category} : AdCardProps) => {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img
          className="ad-card-image"
          src={imgURL}
          alt="image de l'objet a vendre"
        />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price}</div>
        </div>
        <div className="ad-card-category">{category}</div>
      </a>
    </div>
  );
};

export default AdCard;

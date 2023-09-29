import { useRouter } from "next/router";
import axios from "axios"
import { useState, useEffect } from "react"
import { Ads } from "@/types/ads.types"

const AdsDetailsComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ad, setAd] = useState<Ads | null>(null);

useEffect(() => {
  if (id) {
    fetch(`http://localhost:5001/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAd(data));
  }
}, [id])

if (!ad) {
  return <div>Loading...</div>;
}

const deleteAd =  async () => {
  axios.delete(`http://localhost:5001/ads/${ad.id}`)
  router.push('/');
}

  return (
    <>
      <h2 className="ad-details-title">{ad.title}</h2>
      <section className="ad-details">
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={ad.picture} />
        </div>
        <div className="ad-details-info">
          <div className="ad-details-price">{ad.price} €</div>
          <div className="ad-details-description">
          {ad.description}
          </div>
          <hr className="separator" />
          <div className="ad-details-owner">
            Annoncée publiée par <b>{ad.owner}</b> aujourd&apos;hui {ad.createdAt}.
          </div>
        </div>
        <button className="button" onClick={deleteAd}>Supprimer</button>
      </section>
    </>
  );
}

export default AdsDetailsComponent;
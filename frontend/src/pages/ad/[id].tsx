import { useRouter } from "next/router";

const AdDetailComponent = () => {
  const router = useRouter();
  console.log(router)
  return <p>Display details of ad with id {router.query.id}</p>;
}

export default AdDetailComponent;
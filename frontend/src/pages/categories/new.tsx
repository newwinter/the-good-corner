import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import axios from "../../../node_modules/axios/index";

type Category = {
  id: number;
  name: string;
};

const NewCategory = () => {
  // const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const result = await axios.get<Category[]>(
  //       "http://localhost:5001/categories"
  //     );
  //     setCategories(result.data);
  //   };
  //   fetchCategories();
  // }, []);

  const submit = async (event: FormEvent) => {
    //prevenir du reloading de page
    event.preventDefault();

    //lire la data
    const form: EventTarget = event.target;
    const formData = new FormData(form as HTMLFormElement);

    //ou en objet
    const formDataJson = Object.fromEntries(formData.entries());
    console.log(formDataJson);
    await axios.post("http://localhost:5001/categories", formDataJson);
      router.push("/")
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>
          Titre de la catégorie:
          <br />
          <input className="text-field" type="text" name="name" />
        </label>
        <button className="button">Ajouter</button>
      </form>
    </>
  );
};

export default NewCategory;

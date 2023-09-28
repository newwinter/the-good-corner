import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { FormEvent } from 'react';
import axios from '../../../node_modules/axios/index'

type Category = {
  id:number;
  name:string;
}

const NewAd = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => { 
  const fetchCategories = async () => {
    const result = await axios.get<Category[]>("http://localhost:5001/categories");
    setCategories(result.data);
  };
  fetchCategories();
}, []);

  const submit = (event : FormEvent) => {
    //prevenir du reloading de page
    event.preventDefault();

    //lire la data
    const form: EventTarget = event.target;
    const formData = new FormData(form as HTMLFormElement)

    //ou en objet
    const formDataJson = Object.fromEntries(formData.entries())
    console.log(formDataJson)
    axios.post("http://localhost:5001/ads", formDataJson)
    .then(() => router.push('/'));
  }

  return (
    <>
      <form onSubmit={submit}>
        <label>
          Titre de l&apos;annonce:
          <br />
          <input className="text-field" type="text" name="title" />
        </label>
        <label>
          Prix
          <input className="text-field" type="number" name="price" />
        </label>
        <br />
        <select name="category_id">
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>
          Picture
          <input className="text-field" type="text" name="picture" />
        </label>
        <br />
        <label>
          Description
          <input className="text-field" type="text" name="description" />
        </label>
        <br />
        <label>
          Owner
          <input className="text-field" type="text" name="owner" />
        </label>
        <br />
        <label>
          Location
          <input className="text-field" type="text" name="location" />
        </label>
        <br />
        <button className="button">Submit</button>
      </form>
    </>
  );
  }

export default NewAd;
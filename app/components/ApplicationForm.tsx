"use client";

import { addApplication } from "../actions";

export default function ApplicationForm() {
  return (
    <form action={addApplication}>
      <input name="company" placeholder="Entreprise" required />
      <input name="position" placeholder="Poste" required />
      <button type="submit">Ajouter</button>
    </form>
  );
}
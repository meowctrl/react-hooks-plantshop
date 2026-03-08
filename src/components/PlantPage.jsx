import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, search, setSearch, onAddPlant, onToggleStock }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} onToggleStock={onToggleStock} />
    </main>
  );
}

export default PlantPage;
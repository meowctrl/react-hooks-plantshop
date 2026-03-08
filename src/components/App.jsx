import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => {
      const cloned = data.map(p => ({ ...p }));

      const updated = cloned.map(p => ({ ...p, inStock: true }));

      setPlants(updated);
    });
  }, []);

  function handleAddPlant(newPlant) {
    const plantWithStock = { ...newPlant, inStock: true };
    setPlants([...plants, plantWithStock]);
  }
  function handleToggleStock(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    );
    setPlants(updatedPlants);
  }


  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        search={search}
        setSearch={setSearch}
        onAddPlant={handleAddPlant}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;
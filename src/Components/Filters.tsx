const Filters = () => {
  const handleSelection = (selection: string) => {
    searchInput.current.value = selection;
  };
  return (
    <div className="filters">
      <div onClick={() => handleSelection("nature")}>Nature</div>
      <div onClick={() => handleSelection("birds")}>Birds</div>
      <div onClick={() => handleSelection("cats")}>Cats</div>
      <div onClick={() => handleSelection("shoes")}>Shoes</div>
    </div>
  );
};
export default Filters;

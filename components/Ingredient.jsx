const Ingredient = ({ ingredient, action, buttonLabel }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={action}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;

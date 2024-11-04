import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index} 
          ingredient={ingredient} 
          action={() => addToBurger(ingredient)} 
          buttonLabel="+" 
        />
      ))}
    </ul>
  );
};

export default IngredientList;
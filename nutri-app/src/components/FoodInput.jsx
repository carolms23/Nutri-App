export default function FoodInput() {
  return (
    <form>
      <label for="food">Alimento</label>
      <input type="text" id="food" />
      <label for="amount">Quantidade em g</label>
      <input type="text" id="amount" />
      <label for="calories">Calorias em kcal</label>
      <input type="text" id="calories" />
      <label for="type">Refeição</label>
      <select id="type">
        <option>Café da manhã</option>
        <option>Lanche da manhã</option>
        <option>Almoço</option>
        <option>Lanche da Tarde</option>
        <option>Lanche da Noite</option>
      </select>
    </form>
  );
}

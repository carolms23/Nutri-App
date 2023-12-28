export default function WeightInput() {
  return (
    <form>
      <label >Peso em kg</label>
      <input id="weight" type="text"></input>

      <label>Pessoa</label>
      <select id="user">
        <option value="peixe">Peixe</option>
        <option value="doninha">Dona</option>
      </select>
    </form>
  );
}

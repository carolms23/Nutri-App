import { FormControl, Select, MenuItem, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FoodInput() {
  let dataForm = ["Alimento", "Quantidade", "Calorias"];
  const meals = [
    "Café da Manhã",
    "Lanche da Manhã",
    "Almoço",
    "Lanche da Tarde",
    "Lanche da Noite",
  ];
  return (
    <div>
      {dataForm.map((optionMenu) => (
        <TextField
          id="outlinedInput"
          size="small"
          label={optionMenu}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {optionMenu}
        </TextField>
      ))}

      <TextField
        select
        defaultValue="Almoço"
        variant="outlined"
        size="small"
        label="Refeição"
        sx={{width:150}}
        InputLabelProps={{
          shrink: true,
        }}
      >
        {meals.map((meal) => (
          <MenuItem value={meal}>{meal}</MenuItem>
        ))}
      </TextField>
    </div>
  );
}

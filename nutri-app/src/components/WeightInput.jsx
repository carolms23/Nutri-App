import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function WeightInput() {
  return (
    <FormControl sx={{ m: 1, width: 150 }} class="md:flex">
      <TextField
        id="outlined-number"
        label="Peso em kg"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        select
        defaultValue="Peixe"
        variant="outlined"
        size="small"
        label="Pessoa"
        sx={{width:150}}
        InputLabelProps={{
          shrink: true,
        }}
      >
        <MenuItem value="Peixe">Peixe</MenuItem>
        <MenuItem value="Dona">Dona</MenuItem>
      </TextField>
    </FormControl>
  );
}

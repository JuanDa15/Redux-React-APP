import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField type='search' variant='outlined' style={{
      width: '80%',
      marginBottom: '1rem'
    }}/>
  )
}
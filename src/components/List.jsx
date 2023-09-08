import { CircularProgress, ImageList } from "@mui/material";

export default function List({ children, data = [], renderFn, loading }) {
  const render = children || renderFn;
  return (
    <>
      {
        (loading) && <CircularProgress variant="indeterminate" />
      }
      {
        (!loading) && (
          <ImageList
            cols={4}
            rowHeight={121}
          >
            {data.map(render)}
          </ImageList>
        )
      }
    </>
  )
}
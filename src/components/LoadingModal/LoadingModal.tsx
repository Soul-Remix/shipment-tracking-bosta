import { Backdrop, CircularProgress } from "@mui/material";

interface props {
  isOpen: boolean;
}

function LoadingModal({ isOpen }: props) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
    >
      <CircularProgress color="info" />
    </Backdrop>
  );
}

export default LoadingModal;

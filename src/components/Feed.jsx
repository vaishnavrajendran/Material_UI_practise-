import { Box } from "@mui/material";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  );
};

export default Feed;

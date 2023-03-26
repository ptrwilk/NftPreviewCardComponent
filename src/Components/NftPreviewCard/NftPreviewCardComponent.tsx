import { Avatar, Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Image from "../../assets/image-equilibrium.jpg";
import ImageAvatar from "../../assets/image-avatar.png";

const NftPreviewCardComponent = () => (
  <Box className={styles["container"]}>
    <Box className={styles["img-overlay"]}>
      <img src={Image} alt="Equilibrium" />
    </Box>
    <Typography variant="h1" className={styles["title"]}>
      Equilibrium #3429
    </Typography>
    <Typography className={styles["text"]}>
      Our Equilibrium collection promotes balance and calm.
    </Typography>
    <Box className={styles["summary"]}>
      <Typography className={styles["amount"]}>0.041 ETH</Typography>
      <Typography className={styles["remaining-time"]}>3 days left</Typography>
    </Box>
    <Divider />
    <Box className={styles["avatar-container"]}>
      <Avatar className={styles["avatar"]} src={ImageAvatar} />
      <Typography className={styles["creator"]}>
        Creation of <span className={styles["name"]}>Jules Wyvern</span>
      </Typography>
    </Box>
  </Box>
);

export default NftPreviewCardComponent;

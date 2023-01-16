import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
}) => {
  return (
    <Card sx={{ width: 250, p: 1, m: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${IMG_CDN_URL}${cloudinaryImageId}`}
        title={name}
      />
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {cuisines.join(", ")}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {deliveryTime}minutes
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;

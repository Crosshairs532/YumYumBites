import { Button } from "@mui/material";

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
const Edit = ({ id }) => {
    console.log(id);
    return (
        <div>
            <Button variant="outlined" color="error" startIcon={<ChangeCircleIcon />}>
                Edit
            </Button>
        </div>
    );
};

export default Edit;
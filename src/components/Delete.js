import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = ({ id }) => {

    const handleDelete = (id) => {
        const res = axios.delete('', id)
    }

    return (
        <div>
            <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </div>
    );
};

export default Delete;
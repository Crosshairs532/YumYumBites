"use client"
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

const Delete = ({ id, recipe_name }) => {
    const router = useRouter();
    console.log(id);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/all_recipes?id=${id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }).then(res => {
                    return res.json()
                }).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: `You Deleted ${recipe_name}`,
                            icon: "success"
                        });
                        router.push('/')
                    }
                })
                    .catch(err => {
                        console.log(err);
                    })
                // const res = await axios.delete(`http://localhost:4000/all_recipes?id=${id}`);
                // console.log(res);
                // if (res.data.deletedCount > 0) {
                //     Swal.fire({
                //         title: "Deleted!",
                //         text: `You Deleted ${recipe_name}`,
                //         icon: "success"
                //     });
                // }
            }
        });
    }

    return (

        <Button onClick={() => handleDelete(id)} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>

    );
};

export default Delete;
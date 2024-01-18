"use client"
import { Button } from "@mui/material";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@material-tailwind/react";
import { getRecipe } from "@/utils/getRecipe";
import axios from "axios";
import { pathRecipes } from "@/utils/pathRecipes";
import Swal from "sweetalert2";
const Edit = ({ singleMeal }) => {
    console.log(singleMeal);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const updatedRecipe = { title: data.title, ingredients: data.ingredients.split(','), instructions: data.instructions, id: singleMeal[0]._id }
        console.log(updatedRecipe
        );
        // const res = await axios.patch(`http://localhost:4000/all_recipes?id=${singleMeal[0]?._id}`, updatedRecipe);
        const res = await pathRecipes(updatedRecipe, singleMeal[0]?._id)
        if (res.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "recipe updated",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <Button onClick={() => document.getElementById('my_modal_5').showModal()} variant="outlined" color="error" startIcon={<ChangeCircleIcon />}>
                Edit
            </Button>
            <dialog id="my_modal_5" className="modal backdrop-blur-md modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register('title')} defaultValue={singleMeal[0]?.title} label="title" />
                            <Textarea {...register('ingredients')} defaultValue={singleMeal[0]?.ingredients} label="ingredients" />
                            <Textarea {...register('instructions')} rows={6} defaultValue={singleMeal[0]?.instructions} label="instructions" />
                            <button type="submit"> update </button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Edit;
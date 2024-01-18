/*
    description: this is a client component. this page will be used to create new meal
*/
"use client"
import { Input, Textarea } from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import ingredients from '../../ingredients.json';
import { Controller } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(image_hosting_api);
const NewMeal = () => {
    const { register, handleSubmit, watch, formState: { errors }, setValue, control } = useForm();
    const onSubmit = async (events) => {
        console.log(events.image[0]);
        const imageFile = { image: events.image[0] };
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.data);
        const photo = res.data?.data?.display_url;
        console.log(photo);
        if (photo) {
            const newRecipe = { title: events.title, instructions: events.instructions, ingredients: events.ingredients.map((ind) => ind.label), image: photo }
            console.log(newRecipe);
            const res = await axios.post(`http://localhost:4000/all_recipes`, newRecipe)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New Recipe added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div className=" w-[100%] mx-auto">
            <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <Input className=" bg-blue-gray-100" {...register('title', { required: true })} placeholder="title" label="title" />
                {errors.title && <span className="text-red-600 text-sm">title must be filled</span>}
                <Controller
                    control={control}
                    name="ingredients"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isMulti
                            options={ingredients}
                            getOptionValue={(ingredient) => ingredient.id}
                            onChange={(selectedOptions) => setValue('ingredients', selectedOptions)}
                        />
                    )}
                />
                {errors.ingredients && <span className="text-red-600 text-[10px]">You have to select ingredients</span>}
                <Textarea className=" bg-blue-gray-100" {...register('instructions')} rows={6} label="instructions" />
                {errors.instructions && <span className="text-red-600 text-sm">instructions must be filled</span>}
                <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered block file-input-md w-full " />
                <div className=" block">
                    <input className=" w-full px-6 py-2 cursor-pointer rounded-lg hover:bg-deep-orange-700 text-blue-gray-100 bg-deep-orange-500 font-bold" type="submit" value={'submit'} />
                </div>

            </form>
        </div>
    );
};

export default NewMeal;





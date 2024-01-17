"use server";
import axios from 'axios';
import { revalidateTag } from 'next/cache';
export const pathRecipes = async (data, id) => {
    const res = await axios.patch(`http://localhost:4000/all_recipes?id=${id}`, data);
    revalidateTag('recipes')
    return res.data;
}

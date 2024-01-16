import axios from "axios";
export const getRecipe = async (params) => {
    const { mealName, mealId } = params;
    const res = await axios.get(`http://localhost:4000/all_recipes?mealName=${mealName}&mealId=${mealId}`);
    console.log(res.data);
    return res.data;
}
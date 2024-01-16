/*
    title: YumYumBites
    description: this is meal details page, where user can view details of a recipe. also there are two button for editing and deleting

*/


import Delete from "@/components/Delete";
import Button from "@/components/Delete";
import Edit from "@/components/Edit";
import { getRecipe } from "@/utils/getRecipe";
import { getRecipes } from "@/utils/getRecipes";
import Image from "next/image";
import { Suspense } from "react";


const Meal = async ({ params }) => {
    console.log(params);
    const singleMeal = await getRecipe(params);
    console.log(singleMeal[0], "heh");
    return (
        <div className="  border-purple-800 min-h-screen  container mx-auto mt-10">
            <div className=" w-[100%] h-[50vh] relative">
                <div className=" inset-0 absolute z-10 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                <Image fill={true} src={singleMeal[0].image} alt="meal single image" ></Image>
                <h1 className=" font-extrabold text-orange-700 w-[max-content] z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute text-4xl">
                    {singleMeal[0].title}
                </h1>
            </div>
            <div className=" edit_delete_button flex justify-between lg:justify-normal items-center gap-x-3 py-4">
                <Delete id={singleMeal[0]._id} ></Delete>
                <Edit id={singleMeal[0]._id}></Edit>
            </div>
            <div className=" flex lg:flex-row flex-col gap-y-3 items-start justify-around w-full ">
                <Suspense fallback={<p>Ingredients loading.....</p>}>
                    <div className=" ingredients">
                        <h1 className=" text-xl font-bold mt-3">Ingredients:</h1>
                        <ul style={{ listStyle: 'disc' }} className=" pl-10">
                            {
                                singleMeal[0].ingredients.map((items) => (
                                    <li key={singleMeal[0]._id}>{items}</li>
                                ))
                            }
                        </ul>
                    </div>
                </Suspense>
                <Suspense fallback={<h1>Instructions loading.....</h1>}>
                    <div className="instruction mt-3">
                        <h1 className=" text-xl font-bold ">Instruction You want to follow:</h1>
                        <ul className="">
                            {
                                singleMeal[0].instructions.map((step, idx) => (

                                    <li className=" text-pretty">{`step - ${idx + 1}: ${step}`}</li>

                                ))
                            }

                        </ul>
                    </div>
                </Suspense>

            </div>
        </div >

    );
};

export default Meal;
export async function generateStaticParams() {
    const all_recipes = await getRecipes();
    console.log(all_recipes);
    return all_recipes.map(recipe => ({
        mealId: recipe.mealId,
        mealName: recipe.tittle
    }))
}
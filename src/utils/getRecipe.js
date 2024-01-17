
export const getRecipe = async (params) => {
    const { mealName, mealId } = params;
    const res = await fetch(`http://localhost:4000/all_recipes?mealName=${mealName}&mealId=${mealId}`, {
        next: {
            tags: ['recipes']
        }
    });
    const data = await res.json();
    console.log(data);
    return data;
}


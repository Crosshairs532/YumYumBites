
export const getRecipes = async () => {
    const res = await fetch(`http://localhost:4000/all_recipes`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data;

}

// next: {
//     revalidate: 1,
//     tags: 'recipes'
// }
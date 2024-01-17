// import axios from 'axios';
export const getRecipes = async () => {
    const res = await fetch(`http://localhost:4000/all_recipes`, {
        next: {
            tags: ['recipes']
        }
    });
    const data = await res.json();
    return data;
}


/*
    Description: this page will add meal page, where user can create a whole recipe.
    author: Md. Samsul Arefin
*/

import NewMeal from '@/components/newMeal';

const addMeal = () => {

    return (
        <div className="flex min-h-screen container mx-auto flex-col items-center justify-between py-24 px-12">
            <h1 className="text-4xl font-bold text-center">Add preferred meal</h1>
            <div className='w-full lg:w-[500px]'>
                <NewMeal></NewMeal>
            </div>
        </div>
    );
};

export default addMeal;
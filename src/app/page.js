import Image from 'next/image';
import ingredients from '../../ingredients.json'
import recipes from '../../public/recipes.json'
import { getRecipes } from '@/utils/getRecipes';
import Link from 'next/link';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

const Home = async () => {

  const data = await getRecipes();
  console.log(data);
  return (
    <main className="min-h-screen  overflow-hidden max-w-screen-xl border-2 border-deep-orange-700 mx-auto  ">
      <h1 className=" cook text-2xl lg:text-4xl relative font-bold text-center ">Confused What to cook?! {ingredients.length}</h1>
      <Suspense fallback={<h1>loading data....</h1>}>
        <div className=' flex flex-col justify-center items-center gap-8'>
          {
            data?.map((ind, idx) => (
              <Link key={idx} href={`/meal/${ind.title}/${ind._id}`}>
                <div className="card w-[80%] lg:card-side group cursor-pointer outline-teal-500">
                  <figure className=' w-[100%] lg:w-2/5' style={{ borderRadius: '20px' }}><Image className=' group-hover:scale-125 group-hover:blur-[2px] w-full h-full duration-300' width={300} height={300} src={ind.image} alt="food image" /></figure>
                  <div className="card-body w-[100%] group-hover:text-[gray] duration-200">
                    <h2 className="card-title">{ind.title}</h2>
                    <p>{
                      ind.instructions.length > 3 ? ind.instructions.slice(0, 2) + "..." : ind.instructions
                    }</p>

                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </Suspense>
    </main >
  )
}

export default Home;
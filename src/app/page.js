import Image from 'next/image';
import ingredients from '../../ingredients.json'
import { getRecipes } from '@/utils/getRecipes';
import Link from 'next/link';
import { Suspense } from 'react';

const Home = async () => {
  const data = await getRecipes();
  return (
    <main className="min-h-screen overflow-hidden py-8 container mx-auto mt-[8%] space-y-14">
      <h1 className=" cook text-2xl lg:text-4xl relative font-bold text-center ">Confused What to cook?! {ingredients.length}</h1>
      <Suspense fallback={<h1>loading data....</h1>}>
        <div className=' flex flex-col items-center  gap-y-6'>
          {
            data.length > 0 ? data?.map((ind, idx) => (
              <Link key={idx} href={`/meal/${ind.title}/${ind._id}`}>
                <div className="card mx-auto w-[80%] lg:w-[900px]  lg:card-side group cursor-pointer outline-teal-500">
                  <figure className='' style={{ borderRadius: '20px', height: '200px' }}><Image className=' object-fill group-hover:scale-125 group-hover:blur-[2px] w-full h-full duration-300' width={300} height={300} src={ind.image ? ind.image : "nothing to show"} alt="food image" /></figure>
                  <div className="card-body w-[100%] group-hover:text-[gray] duration-200">
                    <h2 className="card-title">{ind.title}</h2>
                    <p>{

                      ind.instructions.length > 100
                        ? `${ind.instructions.slice(0, 100)}..`
                        : ind.instructions

                    }</p>
                  </div>
                </div>
              </Link>
            )) : "no data"
          }
        </div>
      </Suspense>
    </main >
  )
}

export default Home;
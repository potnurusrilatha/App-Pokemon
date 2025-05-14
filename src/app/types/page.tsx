'use client'
import './types.scss'
  let allTypes:string []; 

const Types = () => {
  const fetchTypes = async () => {
    try {
    const response = await fetch('https://pokeapi.co/api/v2/type')
    // console.log(response)
    const data = await response.json();
    allTypes = data.results.map((item:{ name: any; }) => item.name);

    }catch (error) {
      console.log(`Something went wrong: ${error}`)

    }
   
  }
  fetchTypes();

  return (
    <>
    <div className="pokemon__types">
      {allTypes && allTypes.filter((item: string, index: number) => index < 18).map((item:string) => <a href="" className={`pokemon__content--${item}`}>{item}</a>)}
    </div>
    </>
  )
}

export default Types

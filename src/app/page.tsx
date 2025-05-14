import HomeGridArticle from "@/components/HomeGridArticle";
import { HomeGridArticleType } from "@/utils/types"


const article:HomeGridArticleType [] = [
  {title: "Sunny Days", image: "/beach.jpg", style: "primary"},
  {title: "Cute Bugs", image: "/cutebug.jpg", style: "secondary"},
  {title: "Waltzing Pokemon", image: "/dance.jpeg", style: "tertiary"},
  {title: "Fire  + Fighting", image: "/hotbunny.jpg", style: "quaternary"},
  {title: "New Models released", image: "/models.jpg", style: "primary"},
  {title: "Small but Tough", image: "/fish.jpeg", style: "secondary"},
]

export default function Home() {
  return (
    <div className="home-grid">
      
      {article.map((item:HomeGridArticleType, index:number) => <HomeGridArticle key={index} {...item}/>)}
     {/* <HomeGridArticle title="Sunny Days" image="/beach.jpg" style="primary"/> */}
    </div>
  
  )
}

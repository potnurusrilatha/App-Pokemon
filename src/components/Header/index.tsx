import Image from "next/image"
import PokemonLogo from '../../../public/pokemonlogo.png'
import PokeBoll from '../../../public/pokemonboll.png'

const Header = () => {
  return (
    <header className="header">
        <div className="header__icon">
            <Image src={PokeBoll} alt="Pokeboll" />
        </div>
         <div className="header__logo">
            <Image src={PokemonLogo} alt="pokemonlogo" />
         </div>
          <div className="header__avatar">
            <Image src={PokeBoll} alt="Pokeball" />
          </div>
      
    </header>
  )
}

export default Header

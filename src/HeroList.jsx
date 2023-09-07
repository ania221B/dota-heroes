import ButtonsContainer from './ButtonsContainer'
import ReloadButton from './ReloadButton'
import Hero from './Hero'

function HeroList ({ allHeroes, heroes, filterHeroes, getHeroes }) {
  return (
    <section className='section'>
      <div className='container multi-columns'>
        <div>
          <ButtonsContainer
            allHeroes={allHeroes}
            heroes={heroes}
            filterHeroes={filterHeroes}
          ></ButtonsContainer>
          <ReloadButton getHeroes={getHeroes}></ReloadButton>
        </div>
        <div>
          <h2 className='title fs-800'>Dota Heroes</h2>

          <ul className='hero-list grid-auto-fit margin-xl' role='list'>
            {heroes.map(hero => {
              return <Hero {...hero} key={hero.id}></Hero>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default HeroList

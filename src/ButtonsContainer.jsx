import Buttons from './Buttons'

function ButtonsContainer ({ allHeroes, filterHeroes }) {
  const attackTypes = []
  allHeroes.forEach(hero => {
    if (!attackTypes.includes(hero.attack_type)) {
      attackTypes.push(hero.attack_type)
    }
  })
  const attacks = [...attackTypes]

  const primaryAttributes = [] // agi(lity), str(ength), all, int(elligence)
  allHeroes.forEach(hero => {
    if (!primaryAttributes.includes(hero.primary_attr)) {
      primaryAttributes.push(hero.primary_attr)
    }
  })
  const attributes = [...primaryAttributes]

  const heroRoles = []
  allHeroes.forEach(hero => {
    const heroRolesArray = hero.roles
    heroRolesArray.forEach(heroRole => {
      if (!heroRoles.includes(heroRole)) {
        heroRoles.push(heroRole)
      }
    })
  })
  const roles = [...heroRoles]

  return (
    <div>
      <Buttons
        categories={attributes}
        title='Primary Attribute'
        filterHeroes={filterHeroes}
      ></Buttons>
      <Buttons
        categories={attacks}
        title='Attack Type'
        filterHeroes={filterHeroes}
      ></Buttons>
      <Buttons
        categories={roles}
        title='Roles'
        filterHeroes={filterHeroes}
      ></Buttons>
    </div>
  )
}
export default ButtonsContainer

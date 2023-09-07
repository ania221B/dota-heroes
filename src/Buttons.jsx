import { nanoid } from 'nanoid'

function Buttons ({ categories, title, filterHeroes }) {
  function getCategory (category) {
    if (category === 'str') {
      return 'Strength'
    }
    if (category === 'agi') {
      return 'Agility'
    }
    if (category === 'int') {
      return 'Intelligence'
    }
    return `${category.substring(0, 1).toUpperCase() + category.substring(1)}`
  }

  return (
    <div className='button-wrapper'>
      <h3 className='small-caps'>{title}:</h3>
      <div className='flex-group mx-auto'>
        {categories.map(category => {
          return (
            <button
              type='button'
              className='button small-caps'
              onClick={() => filterHeroes(title, category)}
              key={nanoid()}
              data-button='primary'
            >
              {getCategory(category)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Buttons

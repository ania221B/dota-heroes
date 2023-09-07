function ReloadButton ({ getHeroes }) {
  return (
    <div className='button-wrapper'>
      <button
        type='button'
        className='button small-caps'
        onClick={getHeroes}
        data-button='secondary'
      >
        Reload
      </button>
    </div>
  )
}
export default ReloadButton

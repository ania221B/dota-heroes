function Hero ({ localized_name, img }) {
  return (
    <li>
      <article className='card flow'>
        <div className='card__image'>
          <img src={`https://api.opendota.com${img}`} alt={localized_name} />
        </div>
        <h3 className='card__title'>{localized_name}</h3>
      </article>
    </li>
  )
}
export default Hero

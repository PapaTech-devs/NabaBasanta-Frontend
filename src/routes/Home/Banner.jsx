/* eslint-disable */
/* eslint-disable  */
/* eslint-disable*/
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

import dinnerRoom1 from '../../assets/images/front-1.JPG'
import guesthouseExternalFacade from '../../assets/images/front-2.JPG'
import { BorderBtnLink, FilledBtnLink } from '../../components/Button/Button'
import { home } from '../../data/home'
import { useGlobal } from '../../hooks/useGlobal'
import { locations } from '../../utils/locations'

const Banner = () => {
  const { t } = useTranslation()
  const global = useGlobal()

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  }

  const carousel = [guesthouseExternalFacade, dinnerRoom1]

  return (
    <section className="banner-area banner-style-one">
      <div className="container container-custom-two">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="banner-content">
              <span className="promo-tag">
                {t('Cozy homestay')}
              </span>
              <h1 className="title">
                {t('A unique experience at Naba Basanta')}
              </h1>
              <ul>
                <li>
                  <FilledBtnLink
                    to={locations.rooms}
                    label={t('Rooms')}
                    muted={t('View Rooms', {
                      price: home.banner.fromPrice,
                    })}
                  />
                </li>
                <li>
                  <BorderBtnLink
                    to={global.contacts.whatsapp.href}
                    label={t('Book now')}
                    muted={t('With whatsapp')}
                    external
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="banner-thumb d-none d-md-block">
              <Slider className="hero-slider-one" {...sliderSettings}>
                {carousel.map((img, i) => (
                  <div key={i} className="single-thumb">
                    <img src={img} alt="image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

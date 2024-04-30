import { Swiper, SwiperSlide } from 'swiper/react' // Qualquer duvida ler a documentação

import Card from '../Card'
import { Container } from './styles'


function Slider({ title, info }) { // info é o array de movies, então um dos melhores jeitos de lidar é iterando ex: map
    console.log(title, info)

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor // Permite clicar e arrastar
                spaceBetween={10} // Espaçamento entre os cards, {em pixels}
                slidesPerView={'auto'} // Quantos slides aparecerão na tela, auto para ser definido automaticamente
                className='swiper'
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>

    )
}

export default Slider
import { Image, View } from 'react-native';
import ScrollCarousel from 'scroll-carousel-react';

interface CarouselProps {
  imagens: string[];
}

export default function Carousel({ imagens } : CarouselProps) {
  return (
    <View>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {imagens.map((url, index) => (
          <View key={index}>
            <Image source={{uri:url}}/>
          </View>
        ))}
      </ScrollCarousel>
    </View>
  )
}
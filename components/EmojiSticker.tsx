import { Image, type ImageSource } from 'expo-image';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  clamp,
} from 'react-native-reanimated';

// Dimensões fixas da imagem de exibição
const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 440;

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // Limites: o emoji não pode sair da área da imagem
  const halfW = IMAGE_WIDTH / 2 - imageSize / 2;
  const halfH = IMAGE_HEIGHT / 2 - imageSize / 2;

  // --- Posição (arrastar) ---
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);
  const prevTranslateY = useSharedValue(0);

  // --- Escala (pinch zoom) ---
  const scale = useSharedValue(1);
  const prevScale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      prevTranslateX.value = translateX.value;
      prevTranslateY.value = translateY.value;
    })
    .onUpdate((e) => {
      translateX.value = clamp(
        prevTranslateX.value + e.translationX,
        -halfW,
        halfW
      );
      translateY.value = clamp(
        prevTranslateY.value + e.translationY,
        -halfH,
        halfH
      );
    });

  const pinchGesture = Gesture.Pinch()
    .onStart(() => {
      prevScale.value = scale.value;
    })
    .onUpdate((e) => {
      scale.value = Math.max(0.3, Math.min(prevScale.value * e.scale, 5));
    })
    .onEnd(() => {
      if (scale.value < 0.5) {
        scale.value = withSpring(0.5);
      }
    });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={animatedStyle}>
        <Image
          source={stickerSource}
          style={{ width: imageSize, height: imageSize }}
        />
      </Animated.View>
    </GestureDetector>
  );
}

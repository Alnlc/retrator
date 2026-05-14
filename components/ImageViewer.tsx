import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <Image
      source={imageSource}
      style={{
        width: 320,
        height: 440,
        borderRadius: 18,
      }}
      resizeMode="cover"
    />
  );
}

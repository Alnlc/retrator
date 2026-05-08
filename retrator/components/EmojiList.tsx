import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/emojis/apaixonado.png"),
    require("../assets/emojis/arrow_up.png"),
    require("../assets/emojis/back.png"),
    require("../assets/emojis/biohazard_sign.png"),
    require("../assets/emojis/compass.png"),
    require("../assets/emojis/computer.png"),
    require("../assets/emojis/crocodile.png"),
    require("../assets/emojis/dark_sunglasses.png"),
    require("../assets/emojis/desktop_computer.png"),
    require("../assets/emojis/dragon.png"),
    require("../assets/emojis/earth_africa.png"),
    require("../assets/emojis/earth_americas.png"),
    require("../assets/emojis/earth_asia.png"),
    require("../assets/emojis/emoji.png"),
    require("../assets/emojis/face_holding_back_tears.png"),
    require("../assets/emojis/face_with_symbols_on_mouth.png"),
    require("../assets/emojis/female_zombie.png"),
    require("../assets/emojis/fleur_de_lis.png"),
    require("../assets/emojis/footprints.png"),
    require("../assets/emojis/full_moon_with_face.png"),
    require("../assets/emojis/gorilla.png"),
    require("../assets/emojis/hamsa.png"),
    require("../assets/emojis/hear_no_evil.png"),
    require("../assets/emojis/high_brightness.png"),
    require("../assets/emojis/hut.png"),
    require("../assets/emojis/male_zombie.png"),
    require("../assets/emojis/mechanical_arm.png"),
    require("../assets/emojis/moneybag.png"),
    require("../assets/emojis/moon.png"),
    require("../assets/emojis/mouse_trap.png"),
    require("../assets/emojis/movie_camera.png"),
    require("../assets/emojis/muscle.png"),
    require("../assets/emojis/musical_note.png"),
    require("../assets/emojis/mx_claus.png"),
    require("../assets/emojis/neutro.png"),
    require("../assets/emojis/new_moon_with_face.png"),
    require("../assets/emojis/no_bicycles.png"),
    require("../assets/emojis/no_mobile_phones.png"),
    require("../assets/emojis/no_pedestrians.png"),
    require("../assets/emojis/no_smoking.png"),
    require("../assets/emojis/non-potable_water.png"),
    require("../assets/emojis/notes.png"),
    require("../assets/emojis/ocean.png"),
    require("../assets/emojis/oculos-escuros.png"),
    require("../assets/emojis/oculos-escuros-e.png"),
    require("../assets/emojis/on.png"),
    require("../assets/emojis/pirate_flag.png"),
    require("../assets/emojis/qualidade.png"),
    require("../assets/emojis/raccoon.png"),
    require("../assets/emojis/radioactive_sign.png"),
    require("../assets/emojis/rocket.png"),
    require("../assets/emojis/sauropod.png"),
    require("../assets/emojis/saxophone.png"),
    require("../assets/emojis/see_no_evil.png"),
    require("../assets/emojis/shield.png"),
    require("../assets/emojis/smiley.png"),
    require("../assets/emojis/snake.png"),
    require("../assets/emojis/speak_no_evil.png"),
    require("../assets/emojis/sunrise_over_mountains.png"),
    require("../assets/emojis/triste.png"),
    require("../assets/emojis/umbrella_with_rain_drops.png"),
    require("../assets/emojis/underage.png"),
    require("../assets/emojis/x-ray.png"),
    require("../assets/emojis/zombie.png")
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

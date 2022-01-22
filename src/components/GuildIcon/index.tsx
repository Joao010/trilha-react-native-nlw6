import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export const GuildIcon = ({ guildId, iconId }: Props) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Image source={{ uri }} style={styles.image} resizeMode='cover' />
  )
}
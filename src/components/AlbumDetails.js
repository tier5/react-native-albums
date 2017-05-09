import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, image, thumbnail_image, url } = album;
  const { titleStyle, titleTextStyle, thumbnailStyle, albumArtStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={titleStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text >{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={albumArtStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button
          title='Buy Now'
          onPress={() => Linking.openURL(url)}
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
    titleStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    titleTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      width: 50,
      height: 50
    },
    albumArtStyle: {
      height: 300,
      flex: 1,
      width: null
    }
});

export default AlbumDetails;

import * as React from 'react';
import { Appbar } from 'react-native-paper';
import View from '../MyComponents/view'

const MyComponent = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => {
    console.log('abc clicking');
    return(
        <>
        <View/>
        </>
    )
   
  }

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;
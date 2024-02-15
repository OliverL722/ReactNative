import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MenuComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item leadingIcon="airplane" onPress={() => {}} title="Woosh" />
          <Menu.Item leadingIcon="apple" onPress={() => {}} title="Yum" />
          <Menu.Item leadingIcon="axe" onPress={() => {}} title="Chop chop!!" disabled />
          <Menu.Item leadingIcon="bank" onPress={() => {}} title="Money :)" disabled />
          <Menu.Item leadingIcon="battery-10" onPress={() => {}} title="Charge your phone!!!!" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MenuComponent;






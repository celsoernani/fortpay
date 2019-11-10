import React from 'react';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';

import { Container, TabsContainer, TabsItens, TabsText } from './styles';
import { TouchableOpacity, StyleSheet } from 'react-native';
export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TouchableOpacity>
          <TabsItens style={styles.shadow}>
            <Icon1
              name="file-document-box-multiple-outline"
              size={25}
              color="#045901"
            />
            <TabsText>Fatura</TabsText>
          </TabsItens>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabsItens style={styles.shadow}>
            <Icon2 name="barcode" size={25} color="#045901" />
            <TabsText>2ª Via Boleto</TabsText>
          </TabsItens>
        </TouchableOpacity>
      </TabsContainer>

      <TabsContainer>
        <TouchableOpacity>
          <TabsItens style={styles.shadow}>
            <Icon3 name="sound-mix" size={25} color="#045901" />
            <TabsText>Aumentar Limite</TabsText>
          </TabsItens>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabsItens style={styles.shadow}>
            <Icon2 name="unlock" size={25} color="#045901" />
            <TabsText>Desbloqueio de Cartão</TabsText>
          </TabsItens>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.8,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(5),
    backgroundColor: 'white', // It'll look weird without a background color!
  }
});

import React from 'react';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';

import {Container, TabsContainer, TabsItens, TabsText} from './styles';
import {TouchableOpacity} from 'react-native';
export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TouchableOpacity>
          <TabsItens>
            <Icon1
              name="file-document-box-multiple-outline"
              size={25}
              color="#045901"
            />
            <TabsText>Fatura</TabsText>
          </TabsItens>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabsItens>
            <Icon2 name="barcode" size={25} color="#045901" />
            <TabsText>2ª Via Boleto</TabsText>
          </TabsItens>
        </TouchableOpacity>
      </TabsContainer>

      <TabsContainer>
        <TouchableOpacity>
          <TabsItens>
            <Icon3 name="sound-mix" size={25} color="#045901" />
            <TabsText>Aumentar Limite</TabsText>
          </TabsItens>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabsItens>
            <Icon2 name="unlock" size={25} color="#045901" />
            <TabsText>Desbloqueio de Cartão</TabsText>
          </TabsItens>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}

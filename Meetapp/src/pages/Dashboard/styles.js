import styled from 'styled-components/native';
import { light, white } from 'services/utils/colors';
import { fontSize, margin, padding } from 'services/utils/metrics';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 ${padding * 2}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Empty = styled.Text`
  font-size: ${fontSize}px;
  color: ${light};
  margin-top: ${margin * 1.5}px;
  text-align: center;
`;

export const DateFilter = styled.View`
  justify-content: center;
  align-items: center;
  /* justify-self: center */
  flex-direction: row;
  margin-top: ${margin * 3}px;
  margin-bottom: ${margin * 1.5}px;
`;

export const DateText = styled.Text`
  align-content: center;
  font-size: ${fontSize * 1.2}px;
  color: ${white};
  margin: 0 ${margin * 1.5}px;
`;

export const Navigator = styled.TouchableOpacity``;

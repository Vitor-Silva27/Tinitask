import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const Option = styled.Pressable<{ selected: boolean; color: string }>`
  flex: 1;
  padding: 16px 12px;
  border-radius: 12px;
  align-items: center;
`;

export const Circle = styled.View<{ selected: boolean; color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const InnerCircle = styled.View<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

export const Label = styled.Text<{ color: string }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ color }) => color};
`;
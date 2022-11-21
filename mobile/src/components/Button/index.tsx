import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps{
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ label, onPress, disabled, loading }: ButtonProps){
  return(
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading ? (
        <Text weight='600' color='#fff'>{label}</Text>
      ) : (
        <ActivityIndicator color='#fff' />
      )}
    </Container>
  );
}

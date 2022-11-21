// import { StatusBar } from 'expo-status-bar';
import { Modal, StatusBar } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { ConfirmButton, Container } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onConfirmed: () => void;
}

export function OrderConfirmedModal({ visible, onConfirmed }: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType='fade'>
      <StatusBar backgroundColor='#D73035' />

      <Container>
        <CheckCircle />
        <Text size={20} weight='600' color='#fff' style={{ marginTop: 12, marginBottom: 4 }}>Pedido confirmado</Text>
        <Text color='#fff' opacity={0.9}>O pedido já entrou na fila de produção!!</Text>
        <ConfirmButton onPress={onConfirmed}>
          <Text weight='600' color='#D73035'>Ok</Text>
        </ConfirmButton>
      </Container>
    </Modal>
  );
}

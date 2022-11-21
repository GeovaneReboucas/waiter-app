import { Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ModalBody, Overlay, Header, Form, Input } from './styles';

import { Platform } from 'react-native';

interface TableModalProps{
  visible: boolean;
  setVisible: (state: boolean) => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, setVisible, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function onClose(){
    setVisible(false);
    setTable('');
  }

  function handleSave(){
    onSave(table);
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={setTable}
              cursorColor='#D73035'
            />

            <Button label='Salvar' onPress={handleSave} disabled={table.length === 0} />
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}

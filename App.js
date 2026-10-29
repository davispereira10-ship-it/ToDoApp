import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem-vindo!</Text>

      <TextInput 
        placeholder="Digite algo..." 
        placeholderTextColor="#9CA3AF"
        style={styles.input} 
        value={tarefaAtual}
        onChangeText={setTarefaAtual}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonSecondaryText}>Clique aqui ({count})</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonPrimary} 
          onPress={() => {
            if (tarefaAtual.trim()) {
              setListaTarefas([...listaTarefas, tarefaAtual]);
              setTarefaAtual('');
            }
          }}
        >
          <Text style={styles.buttonPrimaryText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.listaTarefas} contentContainerStyle={styles.listaContent}>
        {listaTarefas.map((tarefa, index) => (
          <View key={index} style={styles.itemTarefa}>
            <Text style={styles.itemText}>{tarefa}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.colorRow}>
        <View style={[styles.boxCor, { backgroundColor: '#EF4444' }]} />
        <View style={[styles.boxCor, { backgroundColor: '#10B981' }]} />
        <View style={[styles.boxCor, { backgroundColor: '#3B82F6' }]} />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  buttonGroup: {
    width: '100%',
    gap: 10,
    marginBottom: 16,
  },
  buttonPrimary: {
    width: '100%',
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    width: '100%',
    height: 48,
    backgroundColor: '#E0E7FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  buttonSecondaryText: {
    color: '#3730A3',
    fontSize: 15,
    fontWeight: '600',
  },
  listaTarefas: {
    width: '100%',
    maxHeight: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  listaContent: {
    padding: 12,
    gap: 8,
  },
  itemTarefa: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  itemText: {
    fontSize: 15,
    color: '#374151',
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 'auto',
    marginBottom: 20,
  },
  boxCor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
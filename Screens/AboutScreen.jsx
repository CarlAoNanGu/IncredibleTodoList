import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <SafeAreaView>
        <Text>App Name: Incredible ToDo List</Text>
        <Text>Your Name: [Your Name]</Text>
        <Text>Current Date: {new Date().toLocaleDateString()}</Text>
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;

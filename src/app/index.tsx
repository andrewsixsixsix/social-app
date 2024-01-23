import { Redirect } from 'expo-router';

// TODO: is there a better way then redirect?
const Index = () => {
  return <Redirect href="/login" />;
};

export default Index;

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <Container centerContent p={8}>
      <Stack as="form" spacing={4} w="100%" maxW="md">
        <Heading textAlign="center">NinjaZap</Heading>
        <Text textAlign="center" color="gray.600">Login do Profissional</Text>
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">
          Entrar
        </Button>
      </Stack>
    </Container>
  );
}

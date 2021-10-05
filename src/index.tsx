import { FontAwesome5 } from "@expo/vector-icons";
import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";

const BaseApp: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [array, setArray] = React.useState<string[]>([]);

  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleAddScroll = () => {
    if (value) setArray([...array, value]);
    setValue("");
  };
  function findConsVogaQTD(text: string) {
    const qtdVogal = (
      text.toLocaleLowerCase().match(/[aáàãâeéêiíoóõôuú]/gi) || []
    ).length;
    const qtdConsoante = (
      text
        .toLocaleLowerCase()
        .match(/[^a^á^à^ã^â^e^é^ê^i^í^o^ó^õ^ô^u^ú|^0-9]/gi) || []
    ).length;
    return `${qtdVogal}V ${qtdConsoante}C`;
  }
  const formatedValue = (val: string) => {
    return val.length > 10 ? val.substring(0, 10 - 3) + "..." : val;
  };
  return (
    <Center flex={1} mt="16" mb="4">
      <Container>
        <Heading p="2" textAlign="center" color="purple.600">
          Consultar Vogais e Consoantes!
        </Heading>
      </Container>
      <Stack alignItems="center">
        <HStack p="16" alignItems="center">
          <Input
            value={value}
            keyboardType="web-search"
            onChangeText={handleChange}
            type="text"
            mx="1"
            placeholder="Digitar Palavra"
            size="md"
            w={{
              base: "70%",
              md: "30%",
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="buffer" size={24} color="black" />}
                size={5}
                ml="4"
                color="purple.600"
              />
            }
          />
          <Button
            style={{
              marginRight: 2,
            }}
            onPress={handleAddScroll}
            colorScheme="purple"
            variant="outline"
          >
            Adicionar
          </Button>
          <Button
            onPress={() => {
              alert("Tudo será apagado...");
              setArray([]);
            }}
            colorScheme="purple"
            variant="outline"
          >
            Limpar
          </Button>
        </HStack>
      </Stack>
      <ScrollView
        px={100}
        flex={1}
        _contentContainerStyle={{
          px: "50px",
          w: "100%",
        }}
        height={400}
      >
        <VStack>
          {array.length > 0 &&
            array.map((val, index) => (
              <View
                style={{
                  flexDirection: "row",
                }}
                key={index}
              >
                <Text highlight mb="2">{`${index + 1} º `}</Text>
                <Text highlight mb="2">{`${formatedValue(val)} `}</Text>
                <Text highlight mb="2">{`${findConsVogaQTD(val)}`}</Text>
              </View>
            ))}
        </VStack>
      </ScrollView>
    </Center>
  );
};

export default BaseApp;

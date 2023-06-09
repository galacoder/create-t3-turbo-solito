import React from "react";
import { TextLink } from "solito/link";
import { MotiLink } from "solito/moti";

import { Row } from "../../design/layout";
import { A, H1, P, Text } from "../../design/typography";
import { View } from "../../design/view";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Solito is made by{" "}
          <A href="https://twitter.com/fernandotherojo">Fernando Rojo</A>.
        </P>
        <P className="text-center">
          NativeWind is made by{" "}
          <A href="https://twitter.com/mark__lawlor">Mark Lawlor</A>.
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            "worklet";

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? "0deg" : hovered ? "-3deg" : "0deg",
            };
          }}
          transition={{
            type: "timing",
            duration: 150,
          }}
        >
          <Text className="text-base font-bold">Moti Link</Text>
        </MotiLink>
      </Row>
    </View>
  );
}

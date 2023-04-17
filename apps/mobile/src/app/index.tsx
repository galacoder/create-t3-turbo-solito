import { Stack } from "expo-router";

import { Provider } from "@acme/core/provider";

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  );
}

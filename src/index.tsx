import { root } from "@lynx-js/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { App } from "./App.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetails from "./screens/game-details.jsx";
import GameEventScreen from "./screens/game-event.jsx";

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game-details/:id" element={<GameDetails />} />
        <Route path="/game-event/:id" element={<GameEventScreen />} />
      </Routes>
    </MemoryRouter>
    ,
  </QueryClientProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}

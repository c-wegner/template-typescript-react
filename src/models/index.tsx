import { ClientContext, ClientProvider, ClientCard, ClientCards } from "./_client.cards.models";

export {ClientCard, ClientProvider, ClientContext, ClientCards}

export const Provider=({children})=>(
  <ClientProvider>
    {children}
  </ClientProvider>
)
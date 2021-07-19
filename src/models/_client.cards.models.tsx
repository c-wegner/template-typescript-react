import React, { createContext, useState, useEffect } from "react";
import firebase, { app } from "../globals/firebase";
import { ClientCard } from "./_client.card.models";
export {ClientCard}

export class ClientCards{
  clients: ClientCard[] = []

  getClient(target): ClientCard {
    const l = this.clients.length
    for (let i = 0; i < l; i++) {
      const c = this.clients[i]
      if (c.id === target) return c
      if (c.name === target) return c
      if (c.display === target) return c
    }
    return new ClientCard()
  }

  approveClient(client: any): boolean {
    const l = this.clients.length
    for (let i = 0; i < l; i++) {
      const c = this.clients[i]
      if (c.id !== client.id) {
        if (c.name === client.name || c.display === client.display) {
          alert('There is already a client name ' + c.name + '. Two clients cannot have the same name. Edit or delete your current client or use a different name for you new client. Your new client was NOT added.')
          return false
        }
      }
    }
    return true
  }

  loadClients(clients: ClientCard[]): ClientCards {
    this.clients = []
    const l = clients.length;
    for (let i = 0; i < l; i++) {
      const c = clients[i]

      this.clients.push(c)
    }
    this.clients.sort((x, y) => compareClients(x, y))
    return this
  }
}

function cloneClient(obj: any): ClientCard{
  const temp = new ClientCard();
  for (let p in obj) {
    temp[p] = obj[p];
  }
  return temp;
}

function compareClients(x: ClientCard, y: ClientCard) {
  if (x.isFirmRelated && y.isFirmRelated) {
    return x.display.localeCompare(y.display)
  }

  if (x.isFirmRelated) {
    return 1
  }

  if (y.isFirmRelated) {
    return -1
  }

  return x.display.localeCompare(y.display)
}

export const ClientContext = createContext(new ClientCards())

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([])

  const book = new ClientCards()

  const loadClients = () => {
    const db = firebase.firestore(app)

    db.collection(ClientCard.dbPath).onSnapshot(function (querySnapshot) {
      book.clients = [];

      querySnapshot.forEach(function (doc) {
        const c = cloneClient(doc.data());
        book.clients = [...book.clients, c]

      });
      setClients(book.clients);

    });
  }

  useEffect(() => {
    loadClients()
  }, [])

  return (
    <ClientContext.Provider value={book.loadClients(clients)}>
      {children}
    </ClientContext.Provider>
  )
}
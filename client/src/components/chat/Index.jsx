import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "@/components/customHeader";
import StandarMessageForm from "@/components/customMessageForms/StandarMessageForm"

export default function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "test",
    "1234"
  )
  
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh"}}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return (
            <StandarMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

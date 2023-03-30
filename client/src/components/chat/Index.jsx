import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "@/components/customHeader";
import StandarMessageForm from "@/components/customMessageForms/StandarMessageForm"
import Ai from '../customMessageForms/Ai';
import AiCode from '../customMessageForms/AiCode';
import AiAssist from '../customMessageForms/AiAssist';

export default function Chat(user, secret) {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  )
  
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh"}}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if(chatProps.chat?.title.startsWith("AiChat_")){
            return <Ai props={props} activeChat={chatProps.chat} />
          }
          if(chatProps.chat?.title.startsWith("AiCode_")){
            return <AiCode props={props} activeChat={chatProps.chat} />
          }
          if(chatProps.chat?.title.startsWith("AiAssist_")){
            return <AiAssist props={props} activeChat={chatProps.chat} />
          }
          return (
            <StandarMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

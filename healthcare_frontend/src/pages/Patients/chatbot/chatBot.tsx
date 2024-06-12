import ChatBubble from "./chatBubble";

const ChatBot : React.FC =()=>{
return(
    <>
     <header className="App-header">
        <h1 className="text-2xl font-bold">Welcome to My Chatbot</h1>
      </header>
      <ChatBubble />
    </>
)
}

export default ChatBot;
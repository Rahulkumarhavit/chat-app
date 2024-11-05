import ChatBase from '@/components/chat/ChatBase'
import React from 'react'

export default function chat({params}:{params:{id:string}}) {
    console.log("the group is ",params.id)
  return (

    <div>
        <h1>Hello i am chat</h1>
        <ChatBase/>
    </div>
  )
}

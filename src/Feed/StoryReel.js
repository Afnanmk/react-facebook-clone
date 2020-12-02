import React from "react"
import Story from "./Story"
import "./StoryReel.css"
import { useStateValue } from "../ContextReducer/StateProvider"

function StoryReel() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        profileSrc={user.photoURL}
        title="Afnan Mk"
      />
      <Story
        image="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        profileSrc="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        title="Nurhan Mk"
      />
      <Story
        image="https://images.unsplash.com/photo-1606242403117-4755198b9752?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        profileSrc="https://scontent.fruh4-1.fna.fbcdn.net/v/t1.0-9/107836056_3065243626884940_5810571993833538830_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=osSbjHHh-5cAX9CbzQm&_nc_ht=scontent.fruh4-1.fna&oh=9a2a3081706a61194a2f3917b3759570&oe=5FE6CF2F"
        title="Samia Noor"
      />
      <Story
        image="https://images.unsplash.com/photo-1576322569183-1f474b39b5d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        profileSrc="https://scontent.fruh4-2.fna.fbcdn.net/v/t1.0-9/123792034_1018585645311600_6029217155540155831_o.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=scb6ZeujMjIAX91mIkY&_nc_ht=scontent.fruh4-2.fna&oh=a799d1901d7f0b1c31effb1de17b81c6&oe=5FE39B79"
        title="Sharmin Urmi"
      />
      <Story
        image="https://images.unsplash.com/photo-1524842495237-6abc737eae1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=385&q=80"
        profileSrc="https://scontent.fruh4-5.fna.fbcdn.net/v/t1.0-9/125200603_1058959327883596_2774846606163805373_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=y1quNxOS2T8AX-I16ik&_nc_ht=scontent.fruh4-5.fna&oh=a54ffb8174e59967b81f9fd9c6fd1684&oe=5FE69FF7"
        title="Nadia Islam"
      />
    </div>
  )
}

export default StoryReel

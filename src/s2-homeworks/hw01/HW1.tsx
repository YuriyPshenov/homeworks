import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserType = {
    avatar: typeof avatar;
    name: string;
}

type MessagesType = {
    text: string;
    time: string;
}

export type MessageType = {
    id: number;
    user: UserType;
    message: MessagesType;
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Me',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'You', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.hw1} >
            <div className={s2.hwTitle}>Hometask №1</div>
                <hr/>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1

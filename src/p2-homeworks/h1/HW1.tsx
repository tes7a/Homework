import React from 'react'
import {Message} from "./components/Message";


const messageData = {
    avatar: 'https://cs6.pikabu.ru/post_img/big/2017/10/11/5/1507707832185712573.jpg',
    name: 'Onidzuka -',
    message: 'Yo, how are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

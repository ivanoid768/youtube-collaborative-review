import React from "react"
import { Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';

export const UserAvatar = ({ isSpeaking, name }: { isSpeaking?: boolean; name?: string; }) => {
    let avatarBgColor = isSpeaking ? '#87d068' : 'lightgray'

    return (
        <div style={{ display: 'flex' }} >
            <Avatar style={{ backgroundColor: avatarBgColor }} icon={<UserOutlined />} size='large' />
            <div style={{marginLeft: '5px'}} >{name}</div>
        </div>
    )
}
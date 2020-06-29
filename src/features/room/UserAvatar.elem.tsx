import React from "react"
import { Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';

export const UserAvatar = ({ isSpeaking }: { isSpeaking?: boolean }) => {
    let avatarBgColor = isSpeaking ? '#87d068' : 'lightgray'

    return (
        <Avatar style={{ backgroundColor: avatarBgColor }} icon={<UserOutlined />} size='large' />
    )
}
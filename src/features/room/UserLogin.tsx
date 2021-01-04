import { ChangeEvent, FunctionComponent, useState } from "react";

import React from "react"
import { Button, Input, Modal } from "antd";

import { UserOutlined } from '@ant-design/icons';
import axios from "axios";
import { useParams } from "react-router-dom";

export const UserLogin: FunctionComponent = () => {
    let { id: roomId } = useParams<{id: string}>();

    let allCookies = document.cookie;

    let hasNickname = allCookies.split(';').some(cookieText => {
        return cookieText.indexOf('yce_nickname') !== -1
    })

    const [isModalVisible, setIsModalVisible] = useState(!hasNickname);

    const [nickname, setNickname] = useState('');

    const handleOk = () => {
        setIsModalVisible(false);

        axios.post(`http://localhost:4001/room/${roomId}`, { userNickname: nickname })
            .then(resp => {
                console.log('UserLogin', resp.data);

                document.cookie = `yce_nickname=${nickname}`
            })
    };

    const handleCancel = () => { //TODO: cancel
        setIsModalVisible(false);
    };

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.currentTarget.value)
    };

    return (
        <Modal title="Welcome stranger!" visible={isModalVisible} >
            <div style={{ display: 'flex' }}>
                <Input
                    onChange={handleInputOnChange}
                    onPressEnter={handleOk}
                    size="large"
                    placeholder="Enter your nickname"
                    prefix={<UserOutlined />}
                />
                <Button type="primary" onClick={handleOk} > OK </Button>
            </div>
        </Modal>
    )
}
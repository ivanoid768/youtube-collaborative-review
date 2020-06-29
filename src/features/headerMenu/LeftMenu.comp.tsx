import React from "react"
import { Button } from "antd"
import { CopyOutlined } from '@ant-design/icons';

export const HeaderLeftMenu = () => {

    return (
        <div>
            <Button type="primary" shape="round" icon={<CopyOutlined />} size='large'>
                Copy Room Link    
            </Button>
        </div>
    )
}
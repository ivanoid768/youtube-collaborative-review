import React, {FunctionComponent, HTMLAttributes} from "react"
import { Button } from "antd"
import { CopyOutlined } from '@ant-design/icons';

export const HeaderLeftMenu: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (defaultProps) => {

    return (
        <div {...defaultProps} >
            <Button type="primary" shape="circle" icon={<CopyOutlined />} size='middle' title="Copy Room Link"  />
        </div>
    )
}
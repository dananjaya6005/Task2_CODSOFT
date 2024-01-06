import React from 'react'
import { useUser } from "@clerk/clerk-react";
import FeelingSorry from './Feeling sorry-bro.png';
import { Button, Flex, Tooltip } from 'antd';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import { useNavigate } from 'react-router';

export default function NoAcessMobile() {

    const {user} = useUser();
    const navigate = useNavigate();



  return (
    <> 
    <div className='m-10 text-center flex justify-center flex-col item center min-h-screen ' >
        <h3 className='text-2xl my-5 font-semibold text-gray-500'>Hello {user?.firstName} !</h3>
        <img className='w-[90%]' src={FeelingSorry} alt="Feeling sorry-bro" />
        <h1>Sorry, this app is not available on mobile devices.</h1>
        <p>Please use a desktop or laptop to access this app.</p>

        <div className=' my-10 ' >
        <Button onClick={()=>{navigate('/landing')}}  type="primary" shape="circle" icon={<LeftOutlined />} />
        </div>

        
    </div>
    
    
    </>
  )
}

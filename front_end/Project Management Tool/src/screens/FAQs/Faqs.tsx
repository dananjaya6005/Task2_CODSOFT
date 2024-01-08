
import FeelingSorry from '../../components/Feeling sorry-bro.png';
import { Button} from 'antd';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import { useNavigate } from 'react-router';

export default function Faqs() {


    const navigate = useNavigate();



  return (
    <> 
    <div className='m-10 text-center flex justify-center flex-col item center min-h-screen ' >
        <h3 className='text-2xl my-5 font-semibold text-gray-500'>Sorry ! </h3>
        <img className='w-1/4 self-center ' src={FeelingSorry} alt="Feeling sorry-bro" />
        <h1 className='text-lg'>Sorry, this app is not available right now. But we are working on it.</h1>
        

        <div className=' my-10 ' >
        <Button onClick={()=>{navigate('/landing')}}  type="primary" shape="circle" icon={<LeftOutlined />} />
        </div>

        
    </div>
    
    
    </>
  )
}

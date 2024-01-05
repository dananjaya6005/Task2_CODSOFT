import commonBG from '../../images/commonBg.png';
import { CreateOrganization ,OrganizationProfile } from "@clerk/clerk-react";


export default function CreateOrg() {
  return (
    <div style={
      {
        backgroundImage: `url(${commonBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }
    } className="w-screen  flex justify-center items-center " >
        <CreateOrganization />
        
    </div>
  )
}

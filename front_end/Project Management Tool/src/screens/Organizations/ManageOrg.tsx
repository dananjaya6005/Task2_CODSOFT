import { OrganizationProfile } from "@clerk/clerk-react";
import commonBG from '../../images/commonBg.png';


export default function ManageOrg() {
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

    } className="w-screen flex justify-center items-center " >
        <OrganizationProfile />
    </div>
  )
}

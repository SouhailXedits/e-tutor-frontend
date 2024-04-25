import Button from "modules/shared/components/Button"
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { RiFacebookFill as FacebookIcon } from 'react-icons/ri';


function SocialAccountsAuth() {
    return (
      <div className="">
        <Button className=" flex gap-3 items-center justify-center w-full" variant="tertiaryGray">
          <GoogleIcon />
          <p>Continue with Google</p>
        </Button>
        {/* <Button className=" flex gap-3  items-center" variant="tertiaryGray">
          <FacebookIcon className="" />
          <p>Facebook</p>
        </Button> */}
      </div>
    );
}

export default SocialAccountsAuth

import Button from 'modules/shared/components/Button';
import Logo from '../../Logo';
import { Link } from 'react-router-dom';
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
import { DropdownMenu } from 'components/ui/dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/home/types/user';
import { useLogoutMutation } from 'modules/auth/data/queries/auth.query';

const StudentHeader = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: logout } = useLogoutMutation()
  const user = queryClient.getQueryData(['user']) as IUser;
  const userPhoto = user?.photo || '/users/default-user-image.webp';


  async function handleLogout() {
    await logout();
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-6 py-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Logo />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Link to="purshases">
              <ShoppingCart color="#000" />
            </Link>
            <DropdownMenu dir='rtl'>
              <DropdownMenuTrigger><img src={userPhoto} alt=" user image" height={50} width={50} /></DropdownMenuTrigger>
              <DropdownMenuContent className=' bg-white shadow-lg rounded p-2'  >
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <Button variant="secondaryPrimary" className='rounded' onClick={handleLogout}>Logout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;

import { useQuery } from '@tanstack/react-query';
import { Button } from 'components/ui/button';
import { getMe } from 'modules/auth/data/api/auth.service';

const Home = () => {
  const { data} = useQuery({
    queryKey: ['user'],
    queryFn: getMe,
  })
  console.log(data)
  return <div className="h-screen flex items-center justify-center">Home</div>;
};

export default Home;

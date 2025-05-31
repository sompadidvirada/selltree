import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { virifySession } from '../api/treekoff';
import useTreekoffStorage from '../zustand/storageTreekoff';

const Protect = ({ children }) => {
  const session = useTreekoffStorage((state) => state.session);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      if (!session || !staffInfo?.id_user) {
        navigate('/');
        return;
      }

      try {
        const res = await virifySession(staffInfo.id_user, session);
        if (res.status === 'error') {
          navigate('/');
        }
      } catch (err) {
        console.error('Session verification failed:', err);
        navigate('/');
      }
    };

    checkSession();
  }, [session, staffInfo, navigate]);

  return <>{children}</>;
};

export default Protect;

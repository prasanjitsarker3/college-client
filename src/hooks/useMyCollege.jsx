import { useContext } from 'react';
import { AuthContext } from '../components/AuthenticationPage/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useMyCollege = () => {
    const { user } = useContext(AuthContext);
    const { data: myCOlleges = [], refetch, isLoading } = useQuery({
        queryKey: ["admission", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/admission?email=${user?.email}`)
            return res.json()
        }
    })
    return [myCOlleges, refetch, isLoading]
};

export default useMyCollege;
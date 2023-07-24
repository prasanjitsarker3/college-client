import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthenticationPage/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { user } = useContext(AuthContext);
    const { data: UserInfo = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
                return res.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                throw new Error('Error fetching data');
            }
        }
    });

    return [UserInfo, refetch, isLoading, isError];
};

export default useUsers;

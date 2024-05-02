import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Preloader from '../components/preloader';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          router.push("/error");
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Set loading state to false when data fetching is completed or failed
      }
    };

    fetchUserData();
  }, []);

  // Render preloader if loading state is true
  if (loading) {
    return <Preloader />
      
  }

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

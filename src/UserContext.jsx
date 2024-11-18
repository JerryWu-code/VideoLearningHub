import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('useEffect triggered');
        // Load user from localStorage if available
        const savedUser = localStorage.getItem('userInfo');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userInfo) => {
        setUser(userInfo);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        fetchAdditionalUserInfo(userInfo.email);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
        alert('Log out Successfully!');
    };

    const fetchAdditionalUserInfo = async (userEmail) => {
        try {
            // Replace this URL with your server endpoint
            const response = await fetch(`http://127.0.0.1:8000/api/users/${userEmail}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const additionalUserData = await response.json();
            // Update user state with additional data, including collections and history
            setUser((prevUser) => ({
                ...prevUser,
                ...additionalUserData,
                collections: additionalUserData.collections || [],
                history: additionalUserData.history || [],
            }));
            console.log('Fetched additional user data:', additionalUserData);
        } catch (error) {
            console.error('Error fetching additional user information:', error);
        }
    };

    const addVideoToCollection = async (videoId) => {
        if (!user) return;
        try {
            await fetch(`http://127.0.0.1:8000/api/users/${user.id}/collections`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ videoId }),
            });
            console.log('Video added to collection');
            setUser((prevUser) => ({
                ...prevUser,
                collections: [...(prevUser.collections || []), { videoId, addedAt: new Date() }],
            }));
        } catch (error) {
            console.error('Error adding video to collection:', error);
        }
    };

    const removeVideoFromCollection = async (videoId) => {
        if (!user) return;
        try {
            await fetch(`http://127.0.0.1:8000/api/users/${user.id}/collections/${videoId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Video removed from collection');
            setUser((prevUser) => ({
                ...prevUser,
                collections: (prevUser.collections || []).filter((item) => item.videoId !== videoId),
            }));
        } catch (error) {
            console.error('Error removing video from collection:', error);
        }
    };

    const addVideoToHistory = async (videoId) => {
        if (!user) return;
        try {
            await fetch(`http://127.0.0.1:8000/api/users/${user.id}/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ videoId }),
            });
            console.log('Video added to history');
            setUser((prevUser) => ({
                ...prevUser,
                history: [...(prevUser.history || []), { videoId, watchedAt: new Date() }],
            }));
        } catch (error) {
            console.error('Error adding video to history:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, addVideoToCollection, removeVideoFromCollection, addVideoToHistory }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

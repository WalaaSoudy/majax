import React from 'react';
import image1 from '../../assets/images 1.png';
import logo from '../../assets/logo PNG-01 1.png';

const AuthSidePanel = () => {
    return (
        <div className="w-1/2 border-r-2 border-black relative">
            <div className="absolute inset-0">
                <img 
                    src={image1} 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative flex justify-center items-center h-full">
                <img src={logo} alt="Majex International" className="w-1/2" />
            </div>
        </div>
    );
};

export default AuthSidePanel;
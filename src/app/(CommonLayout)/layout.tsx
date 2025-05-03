import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { IProfile } from '@/types';
import React from 'react';

const CommonLayout = async({children}:{children:React.ReactNode}) => {
    const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`);
    const data = await res.json();
    const profileData:IProfile=data.data;
  return (
   <>
   <Navbar/>
    <main className='min-h-screen'>
      {children}
    </main>
    <Footer profile={profileData}/>
   </>
  );
};

export default CommonLayout;
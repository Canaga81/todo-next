'use client'

import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BlogDetail = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const queryParams = useParams();
  const { id } = queryParams;

  useEffect(() => {

    const detailBlogsFunc = async () => {

      try {
        const res = await axios.get(`https://65034c35a0f2c1f3faebc287.mockapi.io/blog/${id}`);
        setItem(res.data);
        setLoading(false); // Veriler yüklendikten sonra loading durumunu false yap
      } catch (error) {
        console.error("Veri çekme hatası:", error);
        setLoading(false); // Hata durumunda da loading durumunu false yap
      }

    };

    detailBlogsFunc();

  }, [id]);

  return (

    <div className='p-16 flex flex-col gap-y-7 items-center'>
      {loading ? (
        <p>Loading...</p> // Yükleniyor mesajını burada göster
      ) : (
        <>
          <p className='text-[25px] font-bold text-red-500'>Id Kodu: {item.id}</p>
          <img className='w-[500px] h-[500px] object-cover' src={item.img} />
          <h1 className='font-bold text-[25px]'>Adi: {item.name}</h1>
          <p className='text-[19px] font-normal'>Haqqinda: {item.blog}</p>
          <Link className='text-[20px] py-3 px-6 border rounded-2xl border-e-4 font-bold transition-all hover:text-red-500 hover:underline' href={'/blog'}>Geri Qayit</Link>
        </>
      )}
    </div>
    
  );
}

export default BlogDetail;
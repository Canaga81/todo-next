"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogDataFunc = async () => {
      try {
        const res = await axios.get(
          "https://65034c35a0f2c1f3faebc287.mockapi.io/blog"
        );
        setItems(res.data);
        setLoading(false); // Veriler yüklendikten sonra loading durumunu false yap
      } catch (error) {
        console.error("Veri çekme hatası:", error);
        setLoading(false); // Hata durumunda da loading durumunu false yap
      }
    };

    blogDataFunc();
  }, []);

  return (
    <div className="flex flex-col gap-10 px-12 py-6">
      <h1 className="text-[45px]">Blogs</h1>
      <Link
        className="text-[20px] transition-all hover:text-red-500 hover:underline"
        href="/"
      >
        Back to Home
      </Link>
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-72 border-b pb-2">
          <h2 className="font-bold text-2xl">User</h2>
          <h2 className="font-bold text-2xl">Commit</h2>
        </div>
        {loading ? (
          <p>Loading...</p> // Yükleniyor mesajını burada göster
        ) : (
          items && items.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <div className="flex items-start gap-36">
                <div className="flex items-center gap-3">
                  <img className="w-[60px] h-[60px]" src={item.img} />
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <p className="w-[550px]">{`${item.blog.slice(0, 79)}...`}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
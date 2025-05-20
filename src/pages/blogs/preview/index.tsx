import { useRouter } from "next/router";
import { BlogDetails } from "@/components/blogs/BlogsDetails";
import Layout from "@/components/layout/Layout";
import { AHD_HOST } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${AHD_HOST}/page/${id}`);
        setPageData(response?.data);
        
      } catch (err: any) {
        console.error("Error fetching case study:", err);
        toast.error(`Error: ${err.response?.data?.message || err.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout pageInfo={pageData}>
      <ToastContainer />
      <BlogDetails post={pageData} featureBlogsData={[]} showFeaturedBlogs={false}/>
    </Layout>
  );
};

export default BlogArticle;

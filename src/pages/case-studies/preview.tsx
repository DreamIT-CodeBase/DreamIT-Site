import { useRouter } from "next/router";
import { BlogDetails } from "@/components/blogs/BlogsDetails";
import Layout from "@/components/layout/Layout";
import { AHD_HOST } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CaseStudyArticle = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    if (!id) return; 

    const fetchData = async () => {
      try {
        const response = await fetch(`${AHD_HOST}/case-studies/preview/?id=${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setPageData(data);
      } catch (err: any) {
        console.error("Error fetching case study:", err);
        toast.error(`Error: ${err.message}`, {
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
    <Layout>
      <ToastContainer />
      <BlogDetails post={pageData} featureBlogsData={[]} />
    </Layout>
  );
};

export default CaseStudyArticle;

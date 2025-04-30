import React from 'react';
import { AHD_HOST } from '../utils/constant';
import Layout from "@/components/layout/Layout";
import { SectionContent } from '@/components/content';

const TermsAndConditions = ({ pageInfo }:any) => {
    
    return (
        <Layout pageInfo={pageInfo}>
            <div className="container pt-85 pb-60">
                <h1 className="font-bold text-[28px] mb-6 text-center">{pageInfo?.name}</h1>
                {pageInfo?.sections && (
                    <SectionContent 
                        editor={pageInfo?.editor} 
                        sections={pageInfo?.sections} 
                    />
                )}
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const pageSlug = 'terms-conditions';
    let pageInfo = {};
    try {
        const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
        pageInfo = await pageRes.json();
    } catch (error) {
        console.error('Error fetching page info:', error);
        console.log('NO PAGE INFO FOUND FOR ' + pageSlug);
    }
    return { props: { pageInfo } };
};

export default TermsAndConditions;
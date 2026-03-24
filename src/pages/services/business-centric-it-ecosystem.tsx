import StaticRedirectPage from "@/components/shared/StaticRedirectPage";

const destination =
  "/services/erp-implementation-for-business-centric-it-ecosystem";

const BusinessCentricItEcosystemRedirectPage = () => {
  return (
    <StaticRedirectPage
      destination={destination}
      title="Redirecting to ERP Implementation"
    />
  );
};

export default BusinessCentricItEcosystemRedirectPage;

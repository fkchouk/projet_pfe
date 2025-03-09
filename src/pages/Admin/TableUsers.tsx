import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableUser from "../../components/tables/BasicUserTable";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="DA"
        description="React js"
      />
      <PageBreadcrumb pageTitle="Tableaux" />
      <div className="space-y-6">
        <ComponentCard title="Tableau Utilisateurs">
          <BasicTableUser />
        </ComponentCard>
      </div>
    </>
  );
}
import React from 'react';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import SignUpCard from '../../components/Cards/SignUpCard';

export default function SignUpUser() {
    return (
      <>
        <PageBreadcrumb pageTitle="Utilisateurs" />
        <div className="space-y-6">
          <ComponentCard title="Ajouter Utilisateurs">
          <SignUpCard />
          </ComponentCard>
        </div>
      </>
    );
  }

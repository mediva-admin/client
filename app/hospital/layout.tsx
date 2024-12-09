import React from 'react';
import DashboardWrapper from '../components/wrapper/dashboard';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardWrapper>
        <div>{children}</div>
      </DashboardWrapper>
    </>
  );
}

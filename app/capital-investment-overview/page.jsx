import React from "react";
import Container from "../components/shared/Container";

export default function Page() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          USFRANC Hedge Capital Investments Overview
        </h1>

        <p className="mb-4">
          <strong>Posting Frequency:</strong> Monthly
        </p>
        <p className="mb-6">
          This is a non-exhaustive listing of active and planned capital
          reserves used to stabilize USFRANC operations. This list is
          illustrative and does not represent any financial instrument offering.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Government Instruments</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Instrument Type</th>
                <th className="border px-4 py-2 text-left">
                  Holding Institution
                </th>
                <th className="border px-4 py-2 text-left">Start Date</th>
                <th className="border px-4 py-2 text-left">Term</th>
                <th className="border px-4 py-2 text-left">
                  Allocation Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Sovereign Bond</td>
                <td className="border px-4 py-2">
                  Confidential (EU Jurisdiction)
                </td>
                <td className="border px-4 py-2">Jan 2025</td>
                <td className="border px-4 py-2">3 Years</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Treasury Note</td>
                <td className="border px-4 py-2">
                  Confidential (US Jurisdiction)
                </td>
                <td className="border px-4 py-2">Feb 2025</td>
                <td className="border px-4 py-2">2 Years</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Property-Based Assets</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Asset Type</th>
                <th className="border px-4 py-2 text-left">Region</th>
                <th className="border px-4 py-2 text-left">Holding Since</th>
                <th className="border px-4 py-2 text-left">Term</th>
                <th className="border px-4 py-2 text-left">
                  Allocation Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Real Estate</td>
                <td className="border px-4 py-2">Europe</td>
                <td className="border px-4 py-2">Q1 2025</td>
                <td className="border px-4 py-2">None</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Real Estate</td>
                <td className="border px-4 py-2">Asia</td>
                <td className="border px-4 py-2">Q2 2025</td>
                <td className="border px-4 py-2">None</td>
                <td className="border px-4 py-2">Planned</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Currency Holdings</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Currency</th>
                <th className="border px-4 py-2 text-left">Institution</th>
                <th className="border px-4 py-2 text-left">Date Opened</th>
                <th className="border px-4 py-2 text-left">Term</th>
                <th className="border px-4 py-2 text-left">
                  Allocation Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">EUR</td>
                <td className="border px-4 py-2">Tier-1 European Bank</td>
                <td className="border px-4 py-2">March 2025</td>
                <td className="border px-4 py-2">Open</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">USD</td>
                <td className="border px-4 py-2">Tier-1 US Bank</td>
                <td className="border px-4 py-2">April 2025</td>
                <td className="border px-4 py-2">Open</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Institutional Deposits</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Deposit Type</th>
                <th className="border px-4 py-2 text-left">Institution</th>
                <th className="border px-4 py-2 text-left">Scheduled Start</th>
                <th className="border px-4 py-2 text-left">Term</th>
                <th className="border px-4 py-2 text-left">
                  Allocation Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Fixed-Term Deposit</td>
                <td className="border px-4 py-2">EU Regulated Entity</td>
                <td className="border px-4 py-2">Planned Q3 2025</td>
                <td className="border px-4 py-2">6 Months</td>
                <td className="border px-4 py-2">Planned</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contingency Capital</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Purpose</th>
                <th className="border px-4 py-2 text-left">Form</th>
                <th className="border px-4 py-2 text-left">Established</th>
                <th className="border px-4 py-2 text-left">Usage Conditions</th>
                <th className="border px-4 py-2 text-left">
                  Allocation Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Operational Buffer</td>
                <td className="border px-4 py-2">Cash + Liquidity</td>
                <td className="border px-4 py-2">Live</td>
                <td className="border px-4 py-2">For emergencies</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Ownership and Disclaimer
          </h2>
          <p className="mb-2">
            All listed investments are fully held and controlled by USFRANC
            corporate entities (including USFRANC SAS, USFRANC Ltd, USFRANC LLC,
            and regional subsidiaries). These reserves are allocated for
            internal project stability and operational continuity.
          </p>
          <p>
            USFRANC cryptocurrency holders have no ownership, legal right,
            security interest, or financial claim to these assets under any
            jurisdiction.
          </p>
        </section>
      </div>
    </Container>
  );
}

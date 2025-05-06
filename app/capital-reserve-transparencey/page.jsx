import React from "react";
import Container from "../components/shared/Container";

export default function Page() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          USFranc Capital Reserve Transparency
        </h1>

        <h2 className="text-xl font-semibold mb-4">
          How We Hedge Against Market Volatility
        </h2>
        <p className="mb-4">
          At USFranc, our hedge reserve policy is built around security,
          sustainability, and responsible transparency.
        </p>

        <p className="mb-4">
          We allocate a minimum of <strong>67% of net capital</strong> from
          first coin sales into low-risk capital return strategies. These
          reserves are intended solely to support operational continuity and
          project infrastructure — not for speculation or profit generation.
        </p>

        <h2 className="text-xl font-semibold mb-4">
          Hedge Capital Policy Overview
        </h2>
        <p className="mb-2">USFranc’s internal reserve strategy may include:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Government-related financial instruments (such as sovereign bonds
            and treasury holdings)
          </li>
          <li>Property-based assets</li>
          <li>
            Diversified multi-currency accounts held in regulated jurisdictions
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Important Notice</h2>
        <p className="mb-2">
          These internal reserves are not collateral-backed and do not grant
          coinholders any ownership or financial rights. Their sole function is
          to ensure the long-term stability of the USFranc ecosystem.
        </p>
      </div>
    </Container>
  );
}

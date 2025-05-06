import React from "react";
import Container from "../components/shared/Container";

export default function Page() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          USFranc Capital Hedge Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
          <p>
            USFranc’s Capital Hedge Policy establishes a strict framework to
            protect and anchor the value of USFranc cryptocurrency (ISF).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Core Objectives</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Capital Preservation:</strong> Eliminate exposure to
              speculative or volatile assets.
            </li>
            <li>
              <strong>Sovereign Security:</strong> Rely exclusively on
              government-issued instruments from top-rated countries.
            </li>
            <li>
              <strong>High Liquidity:</strong> Maintain reserves that are
              accessible within 7 business days at any time.
            </li>
            <li>
              <strong>Cash Equivalents:</strong> Operate reserve management
              under validator community governance.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Investment Framework
          </h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            3.1 Approved Asset Classes and Allocations
          </h3>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Asset Class</th>
                <th className="border px-4 py-2 text-left">Description</th>
                <th className="border px-4 py-2 text-left">
                  Example Instruments
                </th>
                <th className="border px-4 py-2 text-left">Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  AAA/AA+ rated Sovereign Bonds
                </td>
                <td className="border px-4 py-2">
                  Long-term bonds (8-15 years) from AAA/AA-rated sovereigns
                </td>
                <td className="border px-4 py-2">
                  German Bunds (10Y), Swiss Confederation Bonds (10Y), US
                  Treasuries (8–10Y)
                </td>
                <td className="border px-4 py-2">70%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Short-Term Sovereign Instruments
                </td>
                <td className="border px-4 py-2">
                  Treasury Bills and Notes under 12 months maturity
                </td>
                <td className="border px-4 py-2">
                  US T-Bills (3M, 6M), FRNs, Gins (8M), French BTFs (8M, Bons du
                  Trésor fixe)
                </td>
                <td className="border px-4 py-2">20%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cash Equivalents</td>
                <td className="border px-4 py-2">
                  Money Market Funds and Insured Bank Deposits
                </td>
                <td className="border px-4 py-2">
                  EUR/USD Government Money Market Funds, AAA Institutional
                  Liquidity Pools
                </td>
                <td className="border px-4 py-2">10%</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            3.2 Specific Investment Conditions
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Only sovereign issuers from the Eurozone, US, UK, or Switzerland.
            </li>
            <li>All holdings denominated in EUR, USD, or CHF.</li>
            <li>
              No corporate bonds, equities, cryptocurrencies, derivatives, or
              speculative assets.
            </li>
            <li>Maximum redemption timeframe: 7 business days.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Reserve Management</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              The Validator Community retains authority over Reserve Management
              Entity.
            </li>
            <li>Reserve composition manually revalidated by validators.</li>
            <li>
              Emergency liquidity action must be discussed and justified
              publicly.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Risk Management Strategy
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Minimizing by investing only in the top-rated sovereign bonds.
            </li>
            <li>
              Mitigating Liquidity Risk by holding 50% in short-term and cash
              instruments.
            </li>
            <li>Currency Risk by limiting to EUR, USD, and CHF instruments.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Policy Summary</h2>
          <p>
            The USFranc Capital HFEF is: 100% sovereign-based — no corporate or
            speculative risk. Fully transparent, with decentralized validator
            control. Designed not for long-term stability, regulatory alignment,
            and trustworthiness.
          </p>
        </section>
      </div>
    </Container>
  );
}

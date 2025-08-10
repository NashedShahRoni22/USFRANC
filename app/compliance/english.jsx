export default function EnglishPage() {
  const complianceSectionsEN = [
    {
      title: "Introduction",
      content:
        "USFRANC (USFC) is a decentralized cryptocurrency coin designed for worldwide use as a payment instrument. Built on a hybrid Proof of Work (PoW) and Proof of Stake (PoS) blockchain, USFRANC facilitates secure and transparent transactions across a wide range of jurisdictions and markets.\n\nUSFRANC is not a stablecoin, not a security, and does not offer any investment return or income rights. Its primary use is as a utility cryptocurrency for payments.",
    },
    {
      title: "Global Use and Local Responsibility",
      content:
        "USFRANC is available to users in all countries that permit the legal use of cryptocurrencies, including but not limited to:",
      list: [
        "United States (in accordance with FinCEN and SEC guidelines)",
        "United Kingdom",
        "European Union member states",
        "France (under AMF oversight for utility crypto)",
        "Turkey (for permitted crypto transactions under MASAK guidance)",
        "Asia-Pacific jurisdictions where crypto is authorized, including Japan, South Korea, Singapore, Vietnam, and parts of India and Indonesia",
      ],
      subsections: [
        {
          subtitle: "Users are solely responsible for:",
          list: [
            "Complying with local crypto regulations regarding ownership, transfer, taxation, and commercial use.",
            "Using USFRANC only in countries that legally allow digital assets and payments.",
          ],
        },
        {
          subtitle: "Marketing Restrictions:",
          content:
            "USFRANC does not actively market or promote in jurisdictions where cryptocurrency use is restricted or prohibited.",
        },
      ],
    },
    {
      title: "Approved Use Cases",
      list: [
        "Peer-to-peer payments between individuals",
        "Merchant transactions (in-store and online) where permitted by law",
        "Smart contract escrow-style payments with 7-day post-delivery holding periods",
        "Cross-border payments with local compliance",
      ],
      subsections: [
        {
          subtitle: "USFRANC does not offer:",
          list: [
            "Staking or yield",
            "Profit sharing or dividends",
            "Custodial wallet services",
          ],
        },
      ],
    },
    {
      title: "Regulatory Overview by Region",
      subsections: [
        {
          subtitle: "European Union (MiCA)",
          list: [
            "USFRANC is a utility coin, not an e-money or asset-backed token.",
            "USFRANC complies with MiCA whitepaper, consumer disclosure, and technical audit guidelines.",
          ],
        },
        {
          subtitle: "France (AMF / ACPR)",
          list: [
            "USFRANC SAS is not currently registered as a PSAN.",
            "Full French documentation and capital reserve policy are available.",
          ],
        },
        {
          subtitle: "United Kingdom (FCA)",
          list: [
            "USFRANC Ltd complies with promotional restrictions for cryptoassets.",
            "Services do not fall under FCA regulation as no custody or investments are offered.",
          ],
        },
        {
          subtitle: "United States (SEC / FinCEN)",
          list: [
            "USFRANC LLC operates in alignment with FinCEN guidance.",
            "Not classified as a security under the Howey Test.",
            "MSB registration will be initiated if direct payment services are offered.",
          ],
        },
        {
          subtitle: "Turkey (MASAK)",
          list: [
            "Crypto use in payments is restricted but holding and trading USFRANC is lawful.",
            "USFRANC is not promoted for merchant use in Turkey unless explicitly permitted.",
          ],
        },
        {
          subtitle: "Asia-Pacific",
          content:
            "USFRANC may be held, traded, or used for payments in regions such as Japan, Singapore, Vietnam, and South Korea, according to local frameworks.",
        },
      ],
    },
    {
      title: "Legal Use, Risk Disclosure, and Limitations",
      list: [
        "USFRANC is a cryptocurrency coin, not a regulated financial product.",
        "Its use must always comply with the user's national and regional laws.",
        "No guarantees of value, price appreciation, or financial protection are offered.",
        "Use in blacklisted or restricted jurisdictions is forbidden.",
      ],
    },
    {
      title: "Transparency & Contact",
      list: [
        "A detailed whitepaper",
        "A capital reserve policy",
        "Compliance briefs for major regulatory regions",
      ],
      content: "Email: usfranc@bobosohomail.com",
    },
    {
      title: "Capital Reserve Ownership and Disclaimer",
      content:
        "All listed investments are fully held and controlled by USFRANC corporate entities (including USFRANC SAS, USFRANC Ltd, USFRANC LLC, and regional subsidiaries). These reserves are allocated for internal project stability and operational continuity.\n\nUSFRANC cryptocurrency holders have no ownership, legal right, security interest, or financial claim to these assets under any jurisdiction.",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-logo">
        USFRANC Global Compliance Statement
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        <strong>Effective:</strong> April 2025
      </p>

      {complianceSectionsEN.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-logo mb-2">
            {section.title}
          </h2>

          {section.content &&
            section.content.split("\n\n").map((para, idx) => (
              <p key={idx} className="text-gray-700 mb-4">
                {para}
              </p>
            ))}

          {section.list && (
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {section.subsections &&
            section.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="mb-4">
                <h3 className="text-lg mb-1">{sub.subtitle}</h3>
                {sub.content && (
                  <p className="text-gray-700 mb-2">{sub.content}</p>
                )}
                {sub.list && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {sub.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}

      {/* <p className="mt-8 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This Compliance Statement is for
        informational purposes only and does not constitute legal or financial
        advice.
      </p> */}
    </section>
  );
}

const whitePaperSectionsEN = [
  {
    title: "1. Introduction",
    content: "USFranc is a reserve-backed, hybrid cryptocurrency project built on a dual-consensus architecture: Proof of Work (PoW) and Proof of Stake (PoS). It is designed to preserve capital, offer practical utility for real-world transactions, and deliver secure, transparent governance through community involvement and smart contract automation. The mission of USFranc is to deliver a next-generation cryptocurrency that balances decentralization, compliance, investor protection, and usability, while ensuring resilience through its hybrid technical structure and financial reserve model."
  },
  {
    title: "2. Coin Overview",
    list: [
      "Coin Name: USFranc",
      "Ticker Symbol: USFRC (public-facing name: USF)",
      "Fractional Units: 1 USFranc = 100 Franqs",
      "Total Supply: 115,000,000 USF (11.5 billion Franqs)",
      "Native Chain: USFranc Hybrid Blockchain (PoW/PoS)",
      "Wrapped Version: BEP-20 Token (Binance Smart Chain-compatible)"
    ],
    note: "USFranc coins are digitally scarce and completely pre-issued, meaning there will be no further inflationary minting. This fixed-cap model protects value and simplifies economic planning for both retail users and institutional participants."
  },
  {
    title: "3. Open Source Availability",
    content: "The USFranc blockchain operates as an open-source protocol. However, due to cybersecurity considerations and the need to preserve operational integrity, critical modules (e.g., validator logic, ledger protocol, compliance triggers) are made available only on request to vetted developers, auditors, or institutional partners. The public GitHub repository contains the basic wallet infrastructure, wrapped token smart contracts, and interoperability components. All forks or derivative chains must first undergo a security and compliance audit by the USFranc Reserve Management Entity."
  },
  {
    title: "4. Blockchain Architecture",
    list: [
      "Base Chain: Hybrid fork derived from Komodo (Zcash-based) and Litecoin Core",
      "Consensus: Hybrid (Litecoin-based PoW + Komodo PoS/SmartChain modules)",
      "Ledger: General Ledger (GL) with a real-time Mirrored Ledger backup",
      "Wallet Type: Fully non-custodial (user retains full private key control)",
      "Node Types: Mining Nodes, Compliance Nodes, Master Node for traffic relay, and Mirror Nodes"
    ],
    note: "USFranc's chain is both secure and scalable. The Litecoin forked PoW ensures traditional miner validation and hardware compatibility, while the Komodo PoS integration provides flexibility for optional staking, notarization, and smart contract expansion."
  },
  {
    title: "5. Capital Allocation Strategy",
    content: "To protect investors and stabilize the network, USFranc has established a reserve policy through a transparent capital hedging model:",
    list: [
      "Initial Sale Proceeds Allocation:",
      "- 67% to Capital Hedge Fund:",
      "  - 50% managed by SAS Affin (France)",
      "  - 50% directly invested in government-backed obligations (bonds, treasury notes) in jurisdictions where USFranc is sold",
      "- 20% to Operational Reserve Wallet: Maintains liquidity and project continuity",
      "- 10% to Capital Reserve Wallet: Emergency liquidity support, legal reserves"
    ],
    note: "Importantly, ownership of hedge capital is retained by USFranc's Reserve Management Entity (SAS Affin). Coin holders do not receive direct financial rights over the reserves but benefit from the macroeconomic protection they offer."
  },
  {
    title: "6. Coin Distribution and Lock Policy",
    content: "Of the total 115 million USF:",
    list: [
      "100 million USF will be sold to the public and institutional partners",
      "10 million USF reserved for private investors (see lock terms below)",
      "5 million USF allocated to Founders and Co-Founders (non-sellable for 1 year)"
    ],
    subsections: [
      {
        subtitle: "Private Investor Lock and Bonus Program (10M USF):",
        list: [
          "Year 1: 0% sell allowed, +10% bonus added",
          "Year 2: Sell up to 33% of holdings, +10% bonus added",
          "Year 3: Sell up to 66% total, +10% bonus added",
          "Year 4: 100% holdings unlocked with total +30% bonus accrued"
        ]
      }
    ],
    note: "These rules are embedded in wallet permissions or enforceable via optional escrow contracts or compliance node reviews for large sales."
  },
  {
    title: "7. Administrative Fee Distribution",
    content: "A standard 2% transfer fee applies to all non-exchange peer-to-peer (P2P) transactions. Distribution of this fee:",
    list: [
      "10% to Capital Hedge Fund",
      "20% to Capital Reserve Wallet",
      "70% to Operational Wallet (technology, staff, upgrades, legal, support)"
    ],
    note: "This fee system allows the ecosystem to maintain self-funding capabilities while reducing reliance on outside capital or donation-based development."
  },
  {
    title: "8. AML/CTF Compliance",
    content: "USFranc implements full anti-money laundering (AML) and counter-terrorist financing (CTF) procedures. All purchases above €50,000 (or equivalent in crypto or fiat) are subject to Enhanced Due Diligence (EDD), including:",
    list: [
      "Identity and beneficial ownership verification",
      "Screening against watchlists, sanctions, and PEP databases",
      "Source of funds justification",
      "Real-time or periodic transaction monitoring"
    ],
    note: "All compliance checks are handled internally and encrypted. Data is not shared with third parties unless required by national regulatory authorities."
  },
  {
    title: "9. Transaction Privacy, Security & Anti-Intrusion",
    subsections: [
      {
        subtitle: "9.1 Transaction Privacy",
        list: [
          "Standard transactions remain fully decentralized and private",
          "Only compliance-triggered transfers are subject to internal review",
          "No user identities are exposed publicly or stored in blockchain metadata"
        ]
      },
      {
        subtitle: "9.2 Circumvention & Illicit Behavior Controls",
        list: [
          "AML bypass via structuring or OTC gray-market resale is monitored",
          "Suspicious activity may trigger:",
          "Smart contract freezing or delay mechanisms",
          "Wallet flagging or blacklist by compliance node",
          "Transaction rollback via Mirrored Ledger when justified"
        ]
      },
      {
        subtitle: "9.3 Ledger Redundancy & Security",
        list: [
          "Main General Ledger (GL) supported by a Mirrored Ledger",
          "Mirror is encrypted, 31-day rotating, and updated daily",
          "AES-256, multi-location backup, and cryptographic integrity via hashed logging"
        ]
      }
    ]
  },
  {
    title: "10. Key Attributes Summary",
    content: "USFranc combines modern crypto engineering with institutional-level financial architecture:",
    list: [
      "Security: Litecoin-derived PoW base + Komodo PoS + mirrored ledger",
      "Capital Hedge: 67% of issuance value protected in sovereign reserves",
      "Utility: Built-in P2P fees, merchant escrow, and multi-wallet compatibility",
      "Non-Custodial: USFWallet and wrapped version (wUSF) for wide adoption",
      "Governance: Reserve Entity & eventual community-based upgrades"
    ],
    note: "USFranc is designed for longevity, integration, and cross-chain usability --- with security and value protection as foundational pillars."
  },
  {
    title: "11. Founders and Entity",
    list: [
      "Founder: Brian Fin",
      "Co-Founder: SAS Affin",
      "First Issuing Entity: SAS Affin (Registered under French corporate law)",
      "Compliance Contact: usfranc@bobosohomail.com"
    ],
    subsections: [
      {
        subtitle: "11A. Confidential Elements",
        content: "Details concerning the server network, validator authorization, distribution algorithm, and reserve positioning are not publicly disclosed for cybersecurity and economic integrity reasons. All elements in this whitepaper are subject to updates based on compliance, technical improvements, and community governance votes."
      }
    ]
  },
  {
    title: "12. Our Locations",
    list: [
      "USFRANC LTD (Reg N° 10325829)",
      "4th Floor, Silverstream House,",
      "45 Fitzroy Street, London,",
      "England, W1T 6EB, UK",
      "",
      "French Hybrid Office",
      "8 Rue Dublin, 34200 Sète, France",
      "Compliance & Network Management",
      "",
      "SAS Affin (Reg N° 803965227)",
      "8 Rue Dublin, 34200 Sète, France",
      "USFRANC Reserve Management Entity Manager"
    ]
  },
  {
    title: "13. Advantages of USF Peer-to-Peer Transfer Fees",
    content: "USFranc's peer-to-peer transfer system is designed with clarity, transparency, and operational sustainability. The 2% transaction fee collected after the coin launch is distributed as follows:",
    list: [
      "10% to the Capital Hedge Fund, ensuring continuity in sovereign bond investments",
      "20% to the Capital Reserve Wallet, reinforcing liquidity and stability buffers",
      "70% to the Operational Cost Wallet, used for technology maintenance, developer salaries, network upgrades, support, audits, and marketing"
    ],
    note: "This model maintains fiscal discipline and reduces reliance on external funding while protecting the long-term integrity of the USFranc ecosystem."
  },
  {
    title: "14. Escrow System for Merchant Credibility",
    content: "The USFranc platform includes a secure, voluntary escrow-based wallet system for merchants and crypto holders. In this setup:",
    list: [
      "Crypto holders can choose to activate an escrow mode at the time of payment.",
      "USFranc will temporarily hold the payment in escrow for 7 days or until delivery is confirmed.",
      "This optional feature provides transactional security, builds buyer trust, and enhances merchant credibility.",
      "The system is not enforced and is voluntarily used by both parties to improve accountability and trust in crypto payments."
    ]
  },
  {
    title: "15. Terms and Conditions",
    content: "Full terms available at: https://usfranc.com/terms-and-conditions",
    list: [
      "Coin Ownership: Buyers of USFranc obtain ownership of a decentralized cryptocurrency that is neither a security nor a stablecoin.",
      "Use Case Limitation: USFranc may be used for payments, storage, exchange, and participation in the native ecosystem. It does not grant voting rights unless otherwise announced.",
      "Transferability: USF coins are freely transferable between non-custodial wallets, subject to 2% admin fee rules.",
      "Regulatory Clarity: All transactions and communications are subject to compliance with AML, CTF, and local jurisdiction laws. USFranc is positioned as a utility coin with a reserve-backing model, not as an investment security.",
      "Non-Refund Clause: As per the decentralized structure, all transactions are final unless fraud or AML violations are proven.",
      "Jurisdiction: Initial regulatory oversight lies with French commercial authorities (via SAS Affin) and UK financial compliance (via USFranc Ltd)."
    ]
  },
  {
    title: "16. COIN VERSION:",
    list: [
      "Native Hybrid PoW/PoS Coin (Forked from Komodo + Litecoin Core)",
      "Wrapped BEP-20 Token for BNB Smart Chain compatibility"
    ]
  },
  {
    title: "17. WALLET:",
    list: [
      "Official: USFWallet / USFrancWallet (Multi-Coin Wallet, Non-Custodial)",
      "Compatible: Trust Wallet, MetaMask (for BEP-20 wUSF)"
    ]
  },
  {
    title: "18. Technical Identity of USF",
    content: "USFranc (USF) is a native hybrid cryptocurrency with a dual-format deployment:",
    list: [
      "Native Coin: USF is not an ERC-20 or TRC-20 token. It is built on its own custom blockchain infrastructure using Komodo and Litecoin components.",
      "Consensus: Combines Proof of Work (PoW) and Proof of Stake (PoS)",
      "Mainnet Chain: Native chain using Komodo's SmartChain framework and Litecoin-compatible PoW mining"
    ]
  },
  {
    title: "19. Wrapped Token Version",
    content: "wUSF: A BEP-20 token version (Wrapped USFranc) created for compatibility with Binance Smart Chain wallets such as Trust Wallet and MetaMask. wUSF is pegged 1:1 to the native USF and issued by the USFranc Reserve Management Entity for liquidity and user access.",
    subsections: [
      {
        subtitle: "Summary Table:",
        table: {
          headers: ["Feature", "Native USF Coin", "Wrapped wUSF Token (BEP-20)"],
          rows: [
            ["Blockchain", "USFranc Hybrid Chain", "Binance Smart Chain"],
            ["Standard", "Native (no token standard)", "BEP-20"],
            ["Wallet Compatibility", "USFWallet / USFrancWallet", "Trust Wallet, MetaMask"],
            ["Exchange Utility", "Native", "Compatible with BSC exchanges"],
            ["Ownership", "Decentralized via private keys", "Managed issuance by Reserve Entity"]
          ]
        }
      }
    ]
  },
  {
    title: "20. Mining Policy",
    content: "USFranc's mining architecture is based on a hybrid model:",
    list: [
      "PoW Base: Derived from Litecoin with Komodo integration",
      "Mining Authorization: Mining will be open but monitored. The USFranc network may apply node authorization and IP-based limitations to control participation.",
      "No Reward Dilution: Mining rewards are algorithmically fixed and distributed only to verified mining addresses.",
      "Supply Integrity: A maximum supply cap of 115,000,000 USF is enforced. No new coins beyond this issuance.",
      "Admin Monitoring: A compliance node will verify large transactions and trace transaction origin to prevent manipulation or fraud."
    ],
    note: "Mining is designed to ensure security, fairness, and protection against centralization, while remaining open to institutional and retail miners under transparent compliance terms."
  },
  {
    title: "21. Compliance Access and Policies",
    content: "USFranc adheres to robust compliance standards under EU, UK, and international law. All AML, CTF, and privacy protocols are managed by the Compliance and Reserve Entity.",
    list: [
      "For more information, full policy disclosures, or regulatory communications, please visit our official Compliance page:",
      "🔗 https://usfranc.com/compliance",
      "📩 Contact: usfranc@bobosohomail.com"
    ]
  },
  {
    title: "22. Legal Disclaimer & Liability",
    content: "USFranc is a decentralized cryptocurrency, not a security. By engaging with USFranc:",
    list: [
      "You acknowledge you hold and manage your wallet and funds independently.",
      "USFranc Ltd, SAS Affin, or its affiliates are not liable for user errors, third-party breaches, or losses from misuse.",
      "Any damages arising from regulation, loss of private keys, or external system compromise remain the sole responsibility of the wallet holder.",
      "You agree to abide by AML/CTF, tax laws, and crypto regulations in your jurisdiction."
    ]
  },
  {
    title: "23. Why USFranc Stands Apart",
    list: [
      "🔐 Resilient Hybrid Blockchain: Litecoin + Komodo for scalable, efficient, and secure consensus",
      "💶 Capital-Backed Value: 67% of first sales invested in government bonds and sovereign-aligned projects",
      "🤝 Voluntary Escrow for Trust: Merchants and users can opt into a 7-day escrow, building transparency and confidence",
      "🧾 Regulatory-Focused: Full AML, CTF, and reserve oversight with mirrored ledger and node-level transaction monitoring",
      "🪙 Limited, Fully Issued Supply: Max supply capped at 115M USF --- no inflation, no re-minting risk"
    ]
  },
  {
    title: "24. Hybrid Blockchain Justification & Benefits",
    content: "USFranc's blockchain is designed as a hybrid architecture that combines:",
    list: [
      "Proof of Work (PoW) using a Litecoin-derived base for robust, time-tested security and fast block generation",
      "Proof of Stake (PoS) using Komodo's SmartChain modules to enable energy-efficient validation and optional smart contract deployment"
    ],
    subsections: [
      {
        subtitle: "Advantages of the Hybrid Model:",
        list: [
          "🔄 Security + Efficiency: PoW ensures external miner participation and network stability; PoS ensures fast, low-cost validation.",
          "🔒 Notarization: Komodo-style delayed Proof of Work (dPoW) further protects historical blocks from reorganization attacks.",
          "⚡ Scalability: SmartChain modules allow individual features (like custom consensus, asset chains, or notarization) to be deployed without forking the core network.",
          "🔧 Interoperability: The architecture is flexible and compatible with cross-chain bridging and wrapped token issuance, such as BEP-20 (wUSF) for wallets like Trust Wallet or MetaMask."
        ]
      }
    ],
    note: "This hybrid design makes USFranc one of the few coins that can adapt to both institutional security standards and crypto community needs."
  },
  {
    title: "25. Compliance Infrastructure and Tools",
    content: "USFranc embeds compliance protocols directly into its blockchain and operational infrastructure, without compromising decentralization.",
    subsections: [
      {
        subtitle: "Key Elements:",
        list: [
          "🛡️ Compliance Node System: A special node layer flags transactions above €50,000 or attempts to split them (structuring/multiplexing). Triggered events are routed through a Compliance Smart Contract Layer for review.",
          "🧩 Mirrored Ledger: A 31-day rolling read-only backup of the General Ledger is encrypted and mirrored daily. It ensures recoverability and provides forensic traceability without surveillance of everyday transactions.",
          "⚖️ Escrow Framework (Voluntary): A built-in escrow option holds merchant transactions in smart contracts for 7 days post-delivery confirmation. Participation is voluntary and designed to build trust.",
          "🔍 Transparency + Privacy: Transactions remain confidential unless regulatory triggers (AML/CTF) are met. No wallet identity is revealed without cause or user consent."
        ]
      }
    ],
    note: "USFranc is one of the first cryptocurrencies to proactively integrate compliance safeguards while maintaining private, decentralized use for the community."
  },
  {
    title: "26. Final Remarks and Commitment",
    content: "USFranc is more than a coin --- it is a vision for capital-secure, compliance-resilient, and decentralized crypto use in the real world. It combines:",
    list: [
      "Institutional-grade safeguards",
      "Real-world use cases",
      "Fully transparent reserve support",
      "A fixed total supply with fractional usability (Franqs)",
      "Native blockchain + smart contract + wrapped token support"
    ],
    note: "All development and compliance operations are fully administered by SAS Affin and USFranc Ltd, with ongoing updates to this whitepaper provided through https://usfranc.com and community governance mechanisms."
  }
];

export default function EnglishPage() {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-logo">USFRANC Whitepaper</h1>
      <p className="text-sm text-gray-500 mb-10">
        <strong>Version 1.0</strong> - April 2025
      </p>
      <p className="text-sm text-gray-500 mb-10">
        This document is provided for regulatory review and public disclosure.
      </p>

      {whitePaperSectionsEN.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-logo mb-2">
            {section.title}
          </h2>

          {section.content && (
            <p className="text-gray-700 mb-4">{section.content}</p>
          )}

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
                {sub.subtitle && (
                  <h3 className="text-xl font-medium mb-1">{sub.subtitle}</h3>
                )}

                {sub.content && (
                  <p className="text-gray-700 mb-2">{sub.content}</p>
                )}

                {sub.list && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2 ml-4">
                    {sub.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {sub.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-200">
                      <thead>
                        <tr>
                          {sub.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="border border-gray-200 px-4 py-2 bg-gray-50 text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sub.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="border border-gray-200 px-4 py-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

          {section.note && (
            <p className="text-gray-600 italic mt-4">{section.note}</p>
          )}
        </div>
      ))}

      <p className="mt-8 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This Compliance Statement is for
        informational purposes only and does not constitute legal or financial
        advice.
      </p>
    </section>
  );
}

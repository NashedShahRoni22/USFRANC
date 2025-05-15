import Image from "next/image";
import confidentiality from "../assets/confidentiality.png";
import Container from '../components/shared/Container'

export default function Page() {
  const assuranceContent = [
  {
    title: "1. Transactional Privacy",
    items: [
      "All standard transactions remain confidential and decentralized under our PoW/PoS consensus.",
      "Transfers exceeding €50,000 individually or in aggregate are routed through a compliance layer for automated verification to meet global AML standards.",
      "Wallet identities, balances, and activity remain private and are not shared outside of compliance triggers.",
    ],
  },
  {
    title: "2. Illegal Transfers, Intrusion & Circumvention Prevention",
    items: [
      "USFranc reserves the right to audit and respond to transactions that:",
      "• Result from unauthorized access, system intrusion, or wallet compromise.",
      "• Circumvent official distribution channels, such as grey-market brokers or unauthorized OTC resellers.",
      "• Attempt AML evasion through structured or multiplexed transfers.",
      "In these cases, the system may:",
      "• Delay or hold suspicious transactions via smart contract mechanisms.",
      "• Flag wallet addresses in the compliance register and notify authorities where required.",
      "• Use the Mirrored Ledger to trace and verify transaction authenticity and, where justified, restore balances or isolate threats.",
      "• Blacklist compromised nodes or addresses involved in confirmed abuse, without affecting compliant users.",
    ],
  },
  {
    title: "3. Ledger Integrity and System Security",
    items: [
      "The blockchain’s General Ledger (GL) is supported by a read-only Mirrored Ledger, updated daily with a 31-day encrypted rotation.",
      "This mirror ensures full recoverability in the event of attack, corruption, or hardware failure.",
      "All data is protected using AES-256 encryption, verified via cryptographic hash chains, and stored in multiple secured zones (including off-EU jurisdictions for resilience).",
    ],
  },
  {
    title: "4. User Rights and Network Protection",
    items: [
      "USFranc ensures that legitimate buyers and holders retain full rights to buy, hold, exchange, or store USF within lawful use.",
      "Transactions are never censored or reversed, except where they result from verified fraud, breach, or security violations.",
      "The PoW/PoS validation system ensures decentralization, while the compliance framework protects the network and its users from misuse.",
    ],
  },
];


  return (
    <Container>
      <div className='py-12 px-4 space-y-8'>
        <Image src={confidentiality} alt="confidentiality image" height={""} width={""} className="w-full rounded-xl shadow" />
        <h1 className='text-2xl font-bold mb-6'>
          USFranc Confidentiality & Integrity Assurance Statement
        </h1>
        <p className='text-md mb-6'>
          USFranc is a sovereign cryptocurrency powered by a hybrid Proof of Work (PoW) and Proof of Stake (PoS) blockchain infrastructure...
        </p>

        {assuranceContent.map((section, index) => (
          <div key={index}>
            <h2 className='text-xl font-semibold mb-2'>{section.title}</h2>
            <ul className='list-disc list-inside space-y-1'>
              {section.items.map((item, i) => (
                <li key={i}>{item.replace(/^•\s*/, '')}</li>
              ))}
            </ul>
          </div>
        ))}

        <footer className='mt-12'>
          <p className='italic'>USFranc – Built on Time. Guided by Wisdom. Backed by Surety.</p>
          <p>Your confidentiality is respected. Your rights are preserved. Your security is guaranteed.</p>
        </footer>
      </div>
    </Container>
  )
}

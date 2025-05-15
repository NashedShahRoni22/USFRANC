import Container from "../components/shared/Container";
import amlImg from "../assets/aml (2).png";
import Image from "next/image";

const amlPolicySections = [
  {
    id: 1,
    title: "1. AML Screening Clause – English",
    subtitle: "Anti-Money Laundering (AML) and Compliance Screening",
    paragraphs: [
      "In compliance with international AML/CTF standards, including recommendations from the Financial Action Task Force (FATF), any purchase of USFRANC cryptocurrency exceeding €50,000 (or equivalent in other currencies) may be subject to enhanced due diligence (EDD). These procedures may include:",
    ],
    list: [
      "Verification of identity and beneficial ownership",
      "Screening against global watch lists, sanctions lists, and politically exposed person (PEP) databases",
      "Verification of the source of funds",
      "Ongoing transaction monitoring",
    ],
    footer:
      "By proceeding with a high-value purchase, the buyer consents to these compliance checks. Refusal to provide the required documentation may result in delay, suspension, or cancellation of the transaction, in line with regulatory obligations. All information collected is processed confidentially and only for compliance purposes.",
  },
  {
    id: 2,
    title: "1. Clause de Contrôle LBA – Français",
    subtitle:
      "Lutte contre le blanchiment d'argent (LBA) et Contrôle de Conformité",
    paragraphs: [
      "Conformément aux normes internationales LBA/FT, y compris les recommandations du Groupe d'action financière (GAFI), tout achat de la cryptomonnaie USFRANC supérieur à 50 000 € (ou équivalent en devise) peut faire l’objet d’une procédure de diligence renforcée (EDD). Ces procédures peuvent inclure :",
    ],
    list: [
      "La vérification de l'identité et du bénéficiaire effectif",
      "Le contrôle sur les listes de surveillance mondiales, les listes de sanctions et les bases de données de personnes politiquement exposées (PEP)",
      "La vérification de la provenance des fonds",
      "Une surveillance continue des transactions",
    ],
    footer:
      "En procédant à un achat de grande valeur, l'acheteur accepte ces contrôles de conformité. Le refus de fournir les documents requis peut entraîner un retard, une suspension ou une annulation de la transaction, conformément aux obligations réglementaires. Toutes les informations collectées sont traitées de manière confidentielle et exclusivement à des fins de conformité.",
  },
  {
    id: 3,
    title: "2. Internal AML Screening Workflow – English",
    subtitle: "Trigger: Any USFRANC purchase > €50,000",
    listGroups: [
      {
        title: "1. KYC/EDD Required:",
        items: [
          "ID + Proof of Residence",
          "Entity purchase: Beneficial ownership disclosure",
          "Proof of Funds (bank letter, income, contract, etc.)",
        ],
      },
      {
        title: "2. Automated AML Screening via tool:",
        items: [
          "FATF-listed countries",
          "OFAC, EU, UK, UN sanctions",
          "PEP status",
          "Interpol notices",
        ],
      },
      {
        title: "3. Review Outcome:",
        items: [
          "Pass: Proceed with transaction",
          "Flagged: Escalate for manual review",
        ],
      },
      {
        title: "4. Record keeping:",
        items: ["Securely store documentation, screening logs, approvals."],
      },
      {
        title: "5. Report Suspicious Activity:",
        items: ["File SAR with FIU if needed (e.g., TRACFIN, FinCEN)."],
      },
    ],
  },
  {
    id: 4,
    title: "2. Processus Interne de Contrôle LBA – Français",
    subtitle: "Déclencheur : Tout achat d’USFRANC supérieur à 50 000 €",
    listGroups: [
      {
        title: "1. Diligence renforcée (EDD) :",
        items: [
          "Pièce d’identité + Justificatif de domicile",
          "Achat par une entité : déclaration du bénéficiaire effectif",
          "Justificatif de fonds (attestation bancaire, contrat, etc.)",
        ],
      },
      {
        title: "2. Contrôle automatisé via un outil AML :",
        items: [
          "Pays à haut risque selon le GAFI",
          "Sanctions (OFAC, UE, ONU, Royaume-Uni)",
          "Statut PEP",
          "Avis Interpol",
        ],
      },
      {
        title: "3. Décision :",
        items: [
          "Aucun signalement : Autoriser la transaction",
          "Signalé : Escalade au contrôle manuel",
        ],
      },
      {
        title: "4. Archivage :",
        items: [
          "Conservation sécurisée des documents, rapports et validations.",
        ],
      },
      {
        title: "5. Déclaration d’activité suspecte :",
        items: [
          "Déposer un rapport (SAR) auprès de l’unité de renseignement financier (ex. : TRACFIN, FinCEN).",
        ],
      },
    ],
  },
];

export default function AMLPolicyPage() {
  return (
    <Container>
      <h1 className="mt-8 md:mt-16 text-3xl font-bold text-center text-logo mb-10">
        USFRANC AML Screening Policy & Compliance Workflow
      </h1>

      <div className=" flex flex-col md:flex-row gap-8 md:gap-16 mb-20">
        <div className="md:w-1/3">
          <Image
            src={amlImg}
            alt=""
            className="w-full rounded-xl sticky top-20"
          />
        </div>

        <div className="space-y-10 md:w-2/3">
          {amlPolicySections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-6 rounded-lg shadow border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-logo mb-1">
                {section.title}
              </h2>
              <h3 className="text-lg text-gray-800 mb-4">{section.subtitle}</h3>

              {section.paragraphs &&
                section.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-gray-700 mb-3">
                    {para}
                  </p>
                ))}

              {section.list && (
                <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-gray-700">{section.footer}</p>
              )}

              {section.listGroups && (
                <div className="space-y-4 mt-4">
                  {section.listGroups.map((group, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-gray-800">
                        {group.title}
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

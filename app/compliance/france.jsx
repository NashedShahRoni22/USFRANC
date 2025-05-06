export default function FrancePage() {
  const complianceSectionsFRANCE = [
    {
      title: "1. Classification Juridique de USFranc",
      content:
        "USFranc n'est ni un titre financier, ni une monnaie électronique, ni un produit financier. Il s'agit d'une cryptomonnaie décentralisée destinée aux paiements en ligne et en point de vente. USFranc n'est pas conçu ni proposé comme un produit d'investissement, de spéculation ou de rendement.",
      list: [
        "Aucun droit à des profits n'est accordé aux détenteurs.",
        "Aucun dividende, intérêt ou rendement n’est distribué.",
        "Aucun droit sur les actifs ou les réserves couvertes n’est accordé.",
        "USFranc n’est pas adossé à une monnaie fiduciaire ou une marchandise et ne constitue pas un stablecoin.",
      ],
    },
    {
      title: "2. Conformité à l'Union Européenne (MiCA, RGPD, LCB/FT)",
      subsections: [
        {
          subtitle: "Règlement MiCA",
          content:
            "USFranc est classé comme une cryptomonnaie utilitaire. Un livre blanc détaillé est publié conformément aux exigences de MiCA.",
        },
        {
          subtitle: "Conformité RGPD",
          content:
            "Notre site respecte le RGPD avec des outils de consentement aux cookies et des politiques transparentes. Les données utilisateurs ne sont jamais vendues.",
        },
        {
          subtitle: "Obligations LCB/FT",
          content:
            "Nous n'offrons pas actuellement de services de garde ou d’échange. Si de tels services sont ajoutés, nous nous enregistrerons comme PSAN/CASP auprès d’une autorité compétente.",
        },
      ],
    },
    {
      title: "3. France (AMF, ACPR, Loi PACTE)",
      content:
        "USFranc ne fournit pas de services réglementés nécessitant un enregistrement PSAN. Le livre blanc est conforme aux directives de l'AMF, et la documentation est disponible en français.",
    },
    {
      title: "4. Royaume-Uni (Réglementation FCA)",
      content:
        "USFranc n'est pas proposé aux résidents britanniques. Aucune activité promotionnelle ou service de garde n’est offert. L’accès au site est restreint et des avertissements sont en place.",
    },
    {
      title: "5. États-Unis (SEC, FinCEN, CFTC, IRS)",
      subsections: [
        {
          subtitle: "SEC",
          content:
            "USFranc n’est pas un titre financier selon le test de Howey.",
        },
        {
          subtitle: "FinCEN",
          content:
            "USFranc n’agit pas comme un transmetteur de fonds. Si le service est étendu aux paiements américains, une inscription MSB sera effectuée avec KYC/AML.",
        },
        {
          subtitle: "CFTC & IRS",
          content:
            "USFranc n’est pas utilisé dans des produits dérivés. L’information fiscale est mise à disposition des utilisateurs.",
        },
      ],
    },
    {
      title: "6. Politique de Réserve de Capital",
      content:
        "Une partie des recettes issues des ventes initiales est allouée à des réserves internes à faible risque. Ces réserves ne constituent pas des produits d’investissement et ne donnent lieu à aucun droit ou rendement.",
    },
    {
      title: "7. Juridictions Restreintes",
      content: "USFranc n'est pas proposé dans les régions suivantes :",
      list: [
        "États-Unis",
        "Royaume-Uni",
        "État de New York",
        "Pays sous sanctions",
      ],
    },
    {
      title: "8. Transparence et Déclarations",
      list: [
        "Tous les documents sont disponibles en français et en anglais.",
        "L’architecture de validation (PoW + PoS) est publiée et vérifiable.",
        "Contact : compliance@usfranc.com",
      ],
    },
  ];

  return (
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-logo">
          Déclaration de Conformité - USFranc
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          <strong>Dernière mise à jour :</strong> Avril 2025
        </p>

        {complianceSectionsFRANCE.map((section, index) => (
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
                  <h3 className="text-xl font-medium mb-1">{sub.subtitle}</h3>
                  <p className="text-gray-700">{sub.content}</p>
                </div>
              ))}
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

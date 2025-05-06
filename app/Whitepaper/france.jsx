const whitePaperSectionsFR = [
  {
    title: "1. Résumé Exécutif",
    content:
      "USFranc est une cryptomonnaie décentralisée conçue pour les paiements réels, combinant des mécanismes de consensus Proof of Work (PoW) et Proof of Stake (PoS). Le projet vise à fournir une monnaie numérique stable, sécurisée et conforme pour les transactions en ligne et en point de vente."
  },
  {
    title: "2. Objectif et Vision",
    content:
      "USFranc est conçu pour servir de monnaie de paiement numérique, permettant aux individus et aux entreprises d'envoyer, de recevoir et de régler des paiements de manière sécurisée et transparente. Un modèle de transaction inspiré de l'entiercement est intégré afin de bloquer les fonds jusqu'à la validation de la livraison."
  },
  {
    title: "3. Modèle d'Utilisation",
    content:
      "USFranc fonctionne comme un moyen d'échange. Les pièces sont conservées dans des portefeuilles, utilisées pour l'achat de biens ou de services, puis converties par les commerçants après validation de la livraison. Les fonds sont bloqués pendant 7 jours après réception afin de protéger les utilisateurs, sans offrir de rendement financier."
  },
  {
    title: "4. Architecture Technique",
    content:
      "USFranc repose sur une blockchain à double couche : un réseau principal basé sur un fork de Litecoin (PoW) et une sidechain PoS pour les contrats intelligents. Ce modèle hybride garantit une validation efficace et une haute résilience du réseau."
  },
  {
    title: "5. Répartition des Pièces et Gouvernance",
    content:
      "USFranc émet 115 millions de pièces :",
    list: [
      "67 % adossées à des réserves de capital à faible risque",
      "10 millions pour les investisseurs (non couverts)",
      "5 millions pour les fondateurs (sans rémunération additionnelle durant la première année)"
    ]
  },
  {
    title: "6. Stratégie de Réserve de Capital",
    content:
      "Au moins 67 % du capital net issu des premières ventes est alloué à des réserves sûres (ex : obligations d'État). Ces réserves ne constituent pas un fonds mutualisé ni un actif accessible aux utilisateurs. Aucun rendement, dividende ou droit n'est accordé. Cette stratégie renforce l'intégrité opérationnelle."
  },
  {
    title: "7. Classification Juridique & Risques",
    content:
      "USFranc n'est ni un titre financier, ni une monnaie électronique, ni un produit réglementé. Il est classé comme une cryptomonnaie. Aucun rendement ou droit sur les actifs n'est garanti. Les utilisateurs assument le risque total de perte."
  },
  {
    title: "8. Conformité Réglementaire",
    subsections: [
      {
        subtitle: "UE",
        content: "MiCA (pièce utilitaire), RGPD, LCB/FT"
      },
      {
        subtitle: "France",
        content: "Conformité AMF, non-PSAN"
      },
      {
        subtitle: "UK",
        content: "Non disponible, mentions FCA affichées"
      },
      {
        subtitle: "USA",
        content:
          "Non un titre (test de Howey), enregistrement FinCEN prévu si utilisation américaine activée."
      }
    ]
  },
  {
    title: "9. Conditions Générales",
    content:
      "Les utilisateurs acceptent d'utiliser USFranc uniquement comme cryptomonnaie. Aucun droit d'investissement ni service financier n'est offert. L'accès est restreint aux résidents des États-Unis, du Royaume-Uni, de l'État de New York et des pays sous sanctions."
  },
  {
    title: "10. Transparence et Déclarations",
    list: [
      "Tous les documents sont publiés en français et en anglais.",
      "La gouvernance, la politique de capital et les systèmes de validation sont audités.",
      "Contact : compliance@usfranc.com"
    ]
  }
];

export default function FrancePage() {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-logo">Livre Blanc USFranc</h1>
      <p className="text-sm text-gray-500 mb-10">
        <strong>Version 1.0</strong> - Avril 2025
      </p>
      <p className="text-sm text-gray-500 mb-10">
        Ce document est fourni à des fins de transparence réglementaire et d’information publique.
      </p>

      {whitePaperSectionsFR.map((section, index) => (
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
        <strong>Clause de non-responsabilité :</strong> Cette déclaration de conformité est fournie à titre informatif uniquement et ne constitue pas un conseil juridique ou financier.
      </p>
    </section>
  );
}

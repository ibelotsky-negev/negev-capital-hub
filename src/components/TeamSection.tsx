import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import vadimPhoto from "@/assets/team/vadim.webp";
import kenPhoto from "@/assets/team/ken.webp";
import stuartPhoto from "@/assets/team/stuart.webp";
import bernardPhoto from "@/assets/team/bernard.webp";

interface TeamMember {
  name: string;
  title: string;
  photo: string;
  photoPosition?: string;
  headline: string;
  credentials: string[];
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: "Vadim Uzberg",
    title: "Partner, Fund Management",
    photo: vadimPhoto,
    headline: "Co-Founder and Managing Director of Negev Capital since 2021.",
    credentials: [
      "25+ years in private equity and venture capital across Europe, US, and emerging markets",
      "Former Partner at Baring Vostok Capital Partners (~$4B AUM)",
      "Former Investment Director and CFO at Eagle Venture Partners (EBRD-backed)",
      "Harvard Business School (Leadership Development); Voronezh State University",
      "Based in Limassol, Cyprus",
    ],
    linkedin: "https://www.linkedin.com/in/vadim-uzberg-695210/",
  },
  {
    name: "Ken Belotsky",
    title: "Partner",
    photo: kenPhoto,
    photoPosition: "center top",
    headline:
      "Co-Founding Partner at Negev Capital since 2021 and Co-Founder of Negev Labs, the fund's CNS venture studio.",
    credentials: [
      "Technology entrepreneur and venture investor with 30+ private investments across the US, Israel, and Europe",
      "Co-founded Bright Box, a global connected-car platform sold to Zurich Insurance Group (2018)",
      "Co-founded BrightConsult, an automotive software company acquired by Incadea",
      "Columbia Business School (Executive Education); Business Economics, HSE",
      "Based in Vienna, Austria",
    ],
    linkedin: "https://www.linkedin.com/in/ibelotsky/",
  },
  {
    name: "Dr. Stuart Seidman",
    title: "Partner, Medical Science Lead",
    photo: stuartPhoto,
    headline:
      "Board-certified psychiatrist and internationally recognized expert in psychopharmacology and neuroendocrinology.",
    credentials: [
      "15+ years as Assistant Professor of Clinical Psychiatry at Columbia University",
      "Assistant Attending Psychiatrist at NewYork-Presbyterian; co-directed the Brain-Behavior Clinic at Columbia",
      "International teaching appointments including Tel Aviv University",
      "Publications in American Journal of Psychiatry, JAMA, and Biological Psychiatry",
      "Based in New York",
    ],
    linkedin: "https://www.linkedin.com/in/stuart-seidman-412b7530/",
  },
  {
    name: "Prof. Bernard Lerer",
    title: "Chief of Scientific Advisory Board",
    photo: bernardPhoto,
    photoPosition: "center top",
    headline:
      "Professor of Psychiatry and Founder of the Biological Psychiatry Laboratory at Hadassah – Hebrew University Medical Center.",
    credentials: [
      "Former Director of the National Institute for Psychobiology in Israel",
      "Founding Editor-in-Chief of the International Journal of Neuropsychopharmacology",
      "A.E. Bennet Award (US Society for Biological Psychiatry); Fellow, American College of Neuropsychopharmacology",
      "380+ peer-reviewed publications and four books in psychopharmacology and neurogenetics",
      "Based in Jerusalem, Israel",
    ],
    linkedin: "https://www.linkedin.com/in/bernardlerer/",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <p className="eyebrow">Team</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground">
          Experienced operators and investors in brain health.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="flex flex-col">
              <CardHeader className="items-start pb-4">
                <div className="h-[112px] w-[112px] rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={`${member.name} headshot`}
                    className="h-full w-full object-cover grayscale-[15%]"
                    style={{ objectPosition: member.photoPosition ?? "center" }}
                    loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground leading-tight">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {member.headline}
                </p>
                <ul className="space-y-1.5 flex-1">
                  {member.credentials.map((c) => (
                    <li
                      key={c}
                      className="relative pl-3.5 text-sm text-foreground/75 leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-foreground/40"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

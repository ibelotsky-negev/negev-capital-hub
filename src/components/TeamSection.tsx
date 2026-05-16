import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import vadimPhoto from "@/assets/team/vadim.jpg";
import kenPhoto from "@/assets/team/ken.jpg";
import stuartPhoto from "@/assets/team/stuart.jpg";

interface TeamMember {
  name: string;
  title: string;
  photo: string;
  photoPosition?: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

const team: TeamMember[] = [
  {
    name: "Ken Belotsky",
    title: "Partner, Business Development · Founding Partner, Negev Labs",
    photo: kenPhoto,
    photoPosition: "center top",
    bio:
      "Co-Founding Partner at Negev Capital since 2021 and Co-Founder of Negev Labs, the fund's CNS venture studio developing neuroplasticity-based therapeutics. Technology entrepreneur and venture investor with 30+ private investments across the US, Israel, and Europe in biotech, mental health, mobility, and deep tech. Previously co-founded Bright Box, a global connected-car platform sold to Zurich Insurance Group in 2018, and BrightConsult, an automotive software company acquired by Incadea. Education: Columbia Business School executive education; Business Economics, HSE. Based in Vienna, Austria.",
    email: "info@negevcap.com",
  },
  {
    name: "Vadim Uzberg",
    title: "Partner, Fund Management & LP Relations",
    photo: vadimPhoto,
    bio:
      "Co-Founder and Managing Director of Negev Capital since 2021. 25+ years in private equity and venture capital across Europe, the US, and emerging markets. Previously Partner at Baring Vostok Capital Partners (~$4B AUM), where he spent 15+ years leading healthcare, pharma, and telecoms investments, and Investment Director and CFO at Eagle Venture Partners (EBRD-backed), overseeing fund management across multiple jurisdictions. Education: Harvard Business School Program for Leadership Development; degrees in Economics and Enterprise Management, Voronezh State University. Based in Cascais, Portugal.",
    email: "info@negevcap.com",
  },
  {
    name: "Dr. Stuart Seidman",
    title: "Partner, Medical Science Lead",
    photo: stuartPhoto,
    bio:
      "Board-certified psychiatrist and internationally recognized expert in psychopharmacology and neuroendocrinology. 15+ years as Assistant Professor of Clinical Psychiatry at Columbia University and Assistant Attending Psychiatrist at NewYork-Presbyterian. Co-directed the Brain-Behavior Clinic at Columbia, with international teaching appointments including Tel Aviv University. Prolific researcher with publications in American Journal of Psychiatry, JAMA, and Biological Psychiatry. Expert in depression, hormonal regulation, aging, and sexual health. Active contributor to editorial boards and professional societies globally. Based in New York.",
    email: "info@negevcap.com",
  },
];

const TeamSection = () => {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Team</h2>
        <p className="mt-3 text-muted-foreground text-lg">Experienced operators and investors in brain health.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card
              key={member.name}
              className="cursor-pointer hover:shadow-md transition-shadow text-center"
              onClick={() => setSelected(member)}
            >
              <CardHeader className="items-center pb-2">
                <div className="h-[120px] w-[120px] rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={`${member.name} headshot`}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.photoPosition ?? "center" }}
                    loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <p className="text-sm text-muted-foreground pt-2">{member.shortBio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-muted shrink-0">
                    <img src={selected.photo} alt={`${selected.name} headshot`} className="h-full w-full object-cover" style={{ objectPosition: selected.photoPosition ?? "center" }} />
                  </div>
                  <div className="text-left">
                    <DialogTitle>{selected.name}</DialogTitle>
                    <DialogDescription>{selected.title}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.fullBio}</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:info@negevcap.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;

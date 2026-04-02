import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
}

const team: TeamMember[] = [
  {
    name: "Ken Belotsky",
    title: "Managing Partner",
    shortBio: "Experienced biotech investor with deep expertise in CNS therapeutics and early-stage venture capital.",
    fullBio: "Ken Belotsky is the Managing Partner of Negev Capital. He has over two decades of experience in biotech venture investing, with a particular focus on central nervous system therapeutics. Ken has led investments across multiple stages of drug development, from preclinical through commercialization. His portfolio track record includes multiple successful exits and IPOs in the life sciences sector. Prior to founding Negev Capital, Ken held senior roles at leading healthcare investment firms.",
  },
  {
    name: "Stuart Seidman",
    title: "Partner",
    shortBio: "Healthcare investor and advisor with a track record of identifying breakthrough CNS therapies.",
    fullBio: "Stuart Seidman is a Partner at Negev Capital, where he focuses on deal sourcing, due diligence, and portfolio management. Stuart brings extensive experience in healthcare finance and operations, having worked with both public and private biotech companies. He has been instrumental in identifying and supporting innovative CNS therapeutics companies. Stuart holds board positions at several Negev Capital portfolio companies and plays an active role in their strategic development.",
  },
  {
    name: "Vadim Uzberg",
    title: "Partner",
    shortBio: "Venture capital professional specializing in neuroscience and brain health investments.",
    fullBio: "Vadim Uzberg is a Partner at Negev Capital with a focus on neuroscience and brain health investments. Vadim has significant experience in venture capital, private equity, and corporate development in the life sciences industry. He works closely with portfolio companies on business development, partnerships, and financing strategy. Vadim is passionate about advancing therapies that address unmet needs in CNS disorders and neurodegenerative diseases. He brings a strong network of relationships across the biotech ecosystem.",
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
                <div className="h-[120px] w-[120px] rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Photo</span>
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
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.title}</DialogDescription>
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

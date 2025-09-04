import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  titleId?: string;
};

export const AboutExcerpt = ({ titleId }: Props) => (
  <Card>
    <CardHeader>
      <CardTitle id={titleId}>About</CardTitle>
    </CardHeader>
    <CardContent>
      <p>
        Since its inception in 2005, Roksanda has evolved an unmistakable
        woman-centred design aesthetic within the luxury fashion market. This
        mobile passport is a prototype showing the end-to-end flow you’ll see at
        London Fashion Week.
      </p>
    </CardContent>
  </Card>
);

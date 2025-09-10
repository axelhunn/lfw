import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mock } from "@/prototype/0";

type Props = {
  titleId?: string;
};

export const AboutExcerpt = ({ titleId }: Props) => (
  <Card>
    <CardHeader>
      <CardTitle id={titleId}>{mock.about.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{mock.about.body}</p>
    </CardContent>
  </Card>
);

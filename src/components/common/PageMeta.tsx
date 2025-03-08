import { Helmet } from 'react-helmet';

const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default PageMeta;

import Head from "next/head";
import { useMemo } from "react";

type SeoProps = {
  title: string;
  description: string;
  injecth1?: boolean;
};

export function SEO({ title, description, injecth1 = true }: SeoProps) {
  // Filtra as palavras-chave através do título da página, dividindo o titulo por espaços e removendo vírgulas
  const metas = useMemo(
    () =>
      title
        .split(" ")
        .map((item) => item.replace(",", ""))
        .filter((item) => (item?.length || 0) > 4)
        .join(", "),
    [title]
  );
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="robots" content="index, archive" />
        <meta name="keywords" content={`evento, corais, branqueamento, ciencia, biologia, oceano, ${metas}`} />
      </Head>
      {injecth1 && <h1 style={{ display: "none" }}>{title}</h1>}
    </>
  );
}

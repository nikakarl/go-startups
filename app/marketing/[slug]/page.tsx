import MoreStories from "@/app/more-stories";
import Banner, { BannerProps } from "@/components/banner";
import OfferColumns from "@/components/offercolumns";
import { getAllPosts, getGenericPage } from "@/lib/api";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type GenericPageProps = {
  params: {
    slug: string;
  };
};

const COMPONENT_MAP = {
  banner: Banner,
  offerColumns: OfferColumns,
};

type ComponentToRender = {
  Component: React.JSX.Element;
  props: Record<string, any>;
};

export default async function GenericPage(props: GenericPageProps) {
  const slug = props.params.slug;
  const { isEnabled } = draftMode();
  const page = await getGenericPage(slug, isEnabled);

  if (page === null) {
    return notFound();
  }
  if (page.total === 0) {
    return notFound();
  }

  const allPosts = await getAllPosts(isEnabled);

  const componentsToRender: ComponentToRender[] = [];
  if (page?.items?.[0]?.fields?.components) {
    for (let i = 0; i < page.items[0].fields.components.length; i++) {
      const component = page.items[0].fields.components[i];
      if (!component) {
        continue;
      }
      const type = component.sys.contentType.sys.id as string;
      //@ts-ignore
      const ComponentToRender = COMPONENT_MAP[type];
      if (ComponentToRender) {
        componentsToRender.push({
          Component: ComponentToRender,
          props: component.fields,
        });
      }
    }
  }
  return (
    <>
      <div>
        <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/" className="hover:underline">
            Kalcium
          </Link>
          .
        </h2>
      </div>
      <div>
        {componentsToRender.map((componenttorender, i) => {
          const Component = componenttorender.Component;
          const props = componenttorender.props;
          //@ts-ignore
          return <Component key={i} {...props} />;
        })}
      </div>
      <MoreStories morePosts={allPosts} />
    </>
  );
}

import Banner, { BannerProps } from "@/components/banner";
import { getGenericPage } from "@/lib/api";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

type GenericPageProps = {
  params: {
    slug: string;
  };
};

const COMPONENT_MAP = {
  banner: Banner,
};

type ComponentToRender = {
  Component: React.JSX.Element;
  props: Record<string, any>;
};

export default async function GenericPage(props: GenericPageProps) {
  const slug = props.params.slug;
  const { isEnabled } = draftMode();
  const page = await getGenericPage(slug, isEnabled);
  if (page.total === 0) {
    return notFound();
  }

  const componentsToRender: ComponentToRender[] = [];

  for (let i = 0; i < page.items[0].fields.components.length; i++) {
    const component = page.items[0].fields.components[i];
    const type = component.sys.contentType.sys.id as string;
    const ComponentToRender = COMPONENT_MAP[type];
    if (ComponentToRender) {
      componentsToRender.push({
        Component: ComponentToRender,
        props: component.fields,
      });
    }
  }
  return (
    <div>
      {componentsToRender.map((componenttorender, i) => {
        const Component = componenttorender.Component;
        const props = componenttorender.props;
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}

/* 
Get content from Cotnentful
Loop via genericPage components field (inspect the type of each field in the component field)

/*

export default async function PostPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const { isEnabled } = draftMode();
    const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

*/
